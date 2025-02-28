"use client";

import { TAlbum } from "@/types/types";
import { useState } from "react";
import { Button } from "./ui/Button";
import { X } from "./ui/Svgs";
import Image from "next/image";
import { deleteAlbum } from "@/server/queries";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const DesktopCard = ({ album }: { album: TAlbum }) => {
    const router = useRouter();
    const [rating, setRating] = useState(album.rating);

    async function handleDelete(id: string) {
        await deleteAlbum(id);
        router.refresh();
    }

    return (
        <div className="relative hidden sm:block p-2 bg-white dark:bg-black hover:shadow-md ring-1 ring-transparent hover:ring-black dark:hover:ring-white transition-all duration-150">
            <Link
                href={`/album/${album.id}`}
                prefetch={true}
                className="flex flex-col gap-2"
                scroll={false}
            >
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
                <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="h-10 min-w-10 bg-neutral-800 dark:bg-neutral-100 flex items-center justify-center rounded">
                            {rating && (
                                <p className="text-2xl font-black text-orange-400 opacity-100 transition-opacity duration-300">
                                    {album.rating !== "G" ? album.rating : ""}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col w-full">
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
                </div>
            </Link>
            <div className="absolute top-3 left-3">
                <Button
                    onClick={() => handleDelete(album.id)}
                    variant="icon"
                    className="z-10"
                >
                    <X className="w-5 stroke-2" />
                </Button>
            </div>
        </div>
    );
};
