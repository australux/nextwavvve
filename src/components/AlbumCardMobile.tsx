"use client";

import { TAlbum } from "@/types/types";
import { useState } from "react";
import { Button } from "./ui/Button";
import { ChevronDown, ChevronUp, X } from "./ui/Svgs";
import Image from "next/image";
import { deleteAlbum, updateAlbum } from "@/server/queries";
import { useRouter } from "next/navigation";
import { Selector } from "./ui/Selector";
import { Pill } from "./ui/Pill";
import { Track } from "./Track";

export const MobileCard = ({ album }: { album: TAlbum }) => {
    const router = useRouter();
    const [rating, setRating] = useState<string | undefined>(album.rating);
    const [open, setOpen] = useState<boolean>(false);
    const [toggle, setToggle] = useState<boolean>(false);

    async function handleDelete(id: string) {
        await deleteAlbum(id);
        router.refresh();
    }

    async function handleAlbumRating(e: React.MouseEvent) {
        const newRating = e.currentTarget.id;
        await updateAlbum(album.id, newRating);
        setRating(newRating);
    }

    return (
        <div className="relative sm:hidden">
            <div className="flex flex-col gap-2 p-2 bg-white dark:bg-black hover:shadow-md">
                <div className="flex items-center justify-center w-full h-full overflow-hidden rounded">
                    <Image
                        src={album.images[0].url}
                        alt={album.id}
                        height={600}
                        width={600}
                        priority={true}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex items-end justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="h-10 min-w-10 bg-neutral-800 dark:bg-neutral-100 flex items-center justify-center rounded">
                            {rating && (
                                <p
                                    className={
                                        !open
                                            ? "text-2xl font-black text-orange-400 opacity-100 transition-opacity duration-300"
                                            : "opacity-0"
                                    }
                                >
                                    {album.rating !== "G" ? rating : ""}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold line-clamp-1">
                                {album.name}
                            </p>
                            <p className="text-sm font-medium line-clamp-1">
                                {album.artists.length > 1 ? (
                                    album.artists.map((artist, i) =>
                                        i == album.artists.length - 1 ? (
                                            <span key={i}>{artist.name}</span>
                                        ) : (
                                            <span key={i}>{artist.name}, </span>
                                        )
                                    )
                                ) : (
                                    <span>{album.artists[0].name}</span>
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="z-10" onClick={() => setOpen(!open)}>
                        <Button variant="icon">
                            {open ? (
                                <ChevronUp className="w-5 stroke-2" />
                            ) : (
                                <ChevronDown className="w-5 stroke-2" />
                            )}
                        </Button>
                    </div>
                </div>
                <div
                    className={
                        open
                            ? "flex flex-col gap-2 p-2 rounded bg-neutral-50 dark:bg-neutral-900 w-full md:hidden max-h-full opacity-100 transition-all duration-300"
                            : "opacity-0 max-h-0"
                    }
                >
                    <p className="text-sm">Rating</p>
                    <Selector value={rating} handleRating={handleAlbumRating} />
                    <div className="flex gap-2">
                        <Pill
                            toggle={toggle}
                            handleToggle={() => setToggle(!toggle)}
                        >
                            songs{" "}
                            {toggle ? (
                                <ChevronUp className="w-5 stroke-2" />
                            ) : (
                                <ChevronDown className="w-5 stroke-2" />
                            )}
                        </Pill>
                    </div>
                    {toggle && (
                        <div className="flex flex-col w-full gap-2 text-xs md:text-sm">
                            <div className="flex justify-between w-full px-2 pb-2 border-b text-zinc-400 border-zinc-400">
                                <p>Title</p>
                                <p>Rating</p>
                            </div>
                            {album.tracks.map((track) => (
                                <Track track={track} key={track.id} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="absolute top-3 left-3">
                <Button onClick={() => handleDelete(album.id)} variant="icon">
                    <X className="w-5 stroke-2" />
                </Button>
            </div>
        </div>
    );
};
