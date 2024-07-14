"use client";

import { TAlbum } from "@/types/types";
import { useState } from "react";
import { Button } from "./ui/Button";
import { X } from "./ui/Svgs";
import Image from "next/image";
import { deleteAlbum } from "@/server/queries";
import { useRouter } from "next/navigation";

export const MobileCard = ({ album }: { album: TAlbum }) => {
    const router = useRouter();
    const [rating, setRating] = useState(album.rating);
    const [open, setOpen] = useState(false);

    async function handleDelete(id: string) {
        await deleteAlbum(id);
        router.refresh();
    }

    return (
        <div>
            <div className="relative flex flex-col gap-2 p-2 bg-white hover:shadow-md">
                <div className="flex items-start justify-between w-full">
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 border border-zinc-600 flex items-center justify-center rounded">
                            {rating && (
                                <p
                                    className={
                                        !open
                                            ? "text-lg font-black text-orange-400 opacity-100 transition-opacity duration-300"
                                            : "opacity-0"
                                    }
                                >
                                    {album.rating !== "G" ? album.rating : ""}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-black line-clamp-1">
                                {album.name}
                            </p>
                            <p className="text-sm font-medium text-black line-clamp-1">
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
                    <Button
                        onClick={() => handleDelete(album.id)}
                        variant="icon"
                    >
                        <X className="w-4 h-4 text-black stroke-2" />
                    </Button>
                </div>
                <div className="flex items-center justify-center w-full h-full overflow-hidden rounded aspect-custom">
                    <Image
                        src={album.images[0].url}
                        alt={album.id}
                        height={600}
                        width={600}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};
