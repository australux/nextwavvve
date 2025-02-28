"use client";

import { useState } from "react";
import { Input } from "./ui/Input";
import { Spinner, X } from "./ui/Svgs";
import { List } from "./ui/List";
import { ListItem } from "./ui/ListItem";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/Button";
import { Album } from "@spotify/web-api-ts-sdk";
import { useSession } from "next-auth/react";
import { handleSelection } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { AlbumSuggestion } from "./ui/SuggestionCard";

export const SearchBar = () => {
    const [q, setQ] = useState<string>("");
    const [inputValue, setInputValue] = useState<string>("");
    const { data: session } = useSession();
    const router = useRouter();

    async function fetchSearch(q: string) {
        if (!q) throw new Error("There's no search query");

        try {
            const res = await sdk.search(
                q,
                ["album", "artist", "track"],
                undefined
            );
            return res;
        } catch (error) {
            console.error(error);
            throw new Error("Couldn't fetch search");
        }
    }

    const { data: results, isLoading } = useQuery({
        queryFn: () => fetchSearch(q),
        queryKey: ["search", q],
    });

    function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInputValue(value);
        setTimeout(() => {
            setQ(value);
        }, 200);
    }

    function handleBlur() {
        setTimeout(() => {
            setQ("");
        }, 75);
    }

    function handleFocus() {
        setQ(inputValue);
    }

    async function handleClick(id: string) {
        const fullAlbum: Album = await sdk.makeRequest("GET", `albums/${id}`);
        if (session?.user?.email) {
            await handleSelection(session.user.email, fullAlbum);
        }
        setInputValue("");
        router.refresh();
    }

    return (
        <div className="w-full max-w-[500px] sm:hidden">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="relative flex intems-center gap-2">
                    <label htmlFor="searchbar" hidden></label>
                    <Input
                        type="text"
                        id="searchbar"
                        value={inputValue}
                        onChange={handleInput}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Search..."
                        className="w-full"
                    />
                    <button type="submit" hidden></button>
                    {q && (
                        <div className="absolute right-1.5 top-1.5">
                            <Button
                                variant="icon"
                                className="p-1 shadow-none"
                                onClick={() => setInputValue("")}
                            >
                                <X className="w-5" />
                            </Button>
                        </div>
                    )}
                </div>
            </form>
            {q && (
                <div className="absolute top-full left-0 bg-white dark:bg-black w-screen h-[calc(100vh_-_3.55rem)] z-50 overflow-hidden">
                    {isLoading ? (
                        <List>
                            <ListItem>
                                <Spinner />
                            </ListItem>
                        </List>
                    ) : (
                        <List>
                            {results?.albums.items.map((album) => (
                                <ListItem
                                    key={album.id}
                                    onClick={() => handleClick(album.id)}
                                >
                                    <AlbumSuggestion album={album} />
                                </ListItem>
                            ))}
                        </List>
                    )}
                </div>
            )}
        </div>
    );
};
