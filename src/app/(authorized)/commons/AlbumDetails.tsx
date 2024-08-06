"use client";
import { Track } from "@/components/Track";
import { Selector } from "@/components/ui/Selector";
import { updateAlbum } from "@/server/queries";
import { TAlbum } from "@/types/types";
import Link from "next/link";
import { useState } from "react";

export const AlbumDetails = ({ album }: { album: TAlbum }) => {
    const [rating, setRating] = useState(album.rating);

    async function handleAlbumRating(e: React.MouseEvent) {
        const newRating = e.currentTarget.id;
        await updateAlbum(album.id, newRating);
        setRating(newRating);
    }

    return (
        <div className="h-full w-full shrink flex flex-col gap-4 lg:gap-6 overflow-hidden">
            <div className="flex flex-col gap-2">
                <p className="text-xl lg:text-[32px] font-bold">{album.name}</p>
                <div className="lg:text-lg font-medium hover:underline">
                    {album.artists.length > 1 ? (
                        album.artists.map((artist, i) =>
                            i == album.artists.length - 1 ? (
                                <Link
                                    key={i}
                                    href={`/artists/${artist.id}`}
                                    replace
                                >
                                    {artist.name}
                                </Link>
                            ) : (
                                <Link
                                    key={i}
                                    href={`/artists/${artist.id}`}
                                    replace
                                >
                                    {artist.name},{" "}
                                </Link>
                            )
                        )
                    ) : (
                        <Link href={`/artists/${album.artists[0].id}`} replace>
                            {album.artists[0].name}
                        </Link>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
                <p className="text-sm lg:text-base">Rating</p>
                <Selector value={rating} handleRating={handleAlbumRating} />
                <div className="flex flex-col w-full gap-2 overflow-hidden text-sm">
                    <div className="flex justify-between w-full px-2 pb-2 border-b border-zinc-400 text-zinc-400">
                        <p>Title</p>
                        <p>Rating</p>
                    </div>
                    <div className="w-full h-full overflow-y-scroll scrollbar-thin">
                        {album.tracks.map((track) => (
                            <Track track={track} key={track.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
