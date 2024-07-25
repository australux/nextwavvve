import { ElementRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { List } from "./ui/List";
import { ListItem } from "./ui/ListItem";
import { Spinner, X } from "./ui/Svgs";
import {
    AlbumSuggestion,
    ArtistSuggestion,
    TrackSuggestion,
} from "./ui/SuggestionCard";
import { Input } from "./ui/Input";
import { useQuery } from "@tanstack/react-query";
import { Album } from "@spotify/web-api-ts-sdk";
import { handleSelection } from "@/lib/utils";
import { useSession } from "next-auth/react";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { useRouter } from "next/navigation";
import { Button } from "./ui/Button";

export function SearchModal({ handleOpen }: { handleOpen: () => void }) {
    const navRef = useRef<ElementRef<"dialog">>(null);
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
        }, 150);
    }

    function handleClearInput() {
        setInputValue("");
        setQ("");
    }

    async function handleClick(id: string) {
        const fullAlbum: Album = await sdk.makeRequest("GET", `albums/${id}`);
        if (session?.user?.email) {
            await handleSelection(session.user.email, fullAlbum);
        }
        setInputValue("");
        setTimeout(() => {
            handleOpen();
        }, 50);
        router.refresh();
    }

    useEffect(() => {
        if (!navRef.current?.open) {
            navRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        handleOpen();
    }

    return createPortal(
        <dialog
            ref={navRef}
            onClose={onDismiss}
            className="w-[830px] h-max bg-white text-black dark:bg-black dark:text-white overflow-hidden p-2"
        >
            <div className="flex flex-col gap-2 w-full sm:relative">
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="relative flex items-center gap-2">
                        <label htmlFor="searchbar" hidden></label>
                        <Input
                            type="text"
                            id="searchbar"
                            value={inputValue}
                            onChange={handleInput}
                            placeholder="Search Albums, Artists, Tracks..."
                            className="w-full"
                        />
                        <button type="submit" hidden></button>
                        {q && (
                            <div className="absolute z-40 right-1.5 top-1.5">
                                <Button
                                    variant="icon"
                                    className="p-1 shadow-none"
                                    onClick={handleClearInput}
                                >
                                    <X className="w-5" />
                                </Button>
                            </div>
                        )}
                    </div>
                </form>
                <div className="w-full flex justify-between gap-2">
                    <p className="text-lg font-bold w-full text-left">Albums</p>
                    <p className="text-lg font-bold w-full text-left">
                        Artists
                    </p>
                    <p className="text-lg font-bold w-full text-left">Songs</p>
                </div>
                <div className="grid grid-cols-3 gap-2 overflow-hidden h-[414px]">
                    {q &&
                        (isLoading ? (
                            <List>
                                <ListItem>
                                    <Spinner />
                                </ListItem>
                            </List>
                        ) : (
                            <>
                                <List>
                                    {results?.albums.items.map((album) => (
                                        <ListItem
                                            key={album.id}
                                            onClick={() =>
                                                handleClick(album.id)
                                            }
                                        >
                                            <AlbumSuggestion album={album} />
                                        </ListItem>
                                    ))}
                                </List>
                                <List>
                                    {results?.artists.items.map((artist) => (
                                        <ListItem
                                            key={artist.id}
                                            onClick={() =>
                                                setTimeout(() => {
                                                    handleOpen();
                                                }, 75)
                                            }
                                        >
                                            <ArtistSuggestion artist={artist} />
                                        </ListItem>
                                    ))}
                                </List>
                                <List>
                                    {results?.tracks.items.map((track) => (
                                        <ListItem key={track.id}>
                                            <TrackSuggestion track={track} />
                                        </ListItem>
                                    ))}
                                </List>
                            </>
                        ))}
                </div>
                <div className="text-sm p-1">
                    <code className="bg-card-accent-1 px-1 py-0.5 rounded">
                        esc
                    </code>{" "}
                    <span className="text-neutral-500"> to exit</span>
                </div>
            </div>
        </dialog>,
        document.getElementById("search-root")!
    );
}
