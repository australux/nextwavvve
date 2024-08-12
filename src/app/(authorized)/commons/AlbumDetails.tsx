"use client";
import { Track } from "@/components/Track";
import { Selector } from "@/components/ui/Selector";
import { handleRating } from "@/lib/utils";
import { updateAlbum } from "@/server/queries";
import { TAlbum } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export const AlbumDetails = ({ album }: { album: TAlbum }) => {
    const [rating, setRating] = useState(album.rating);

    return (
        <div className="h-full w-full shrink flex flex-col gap-4 lg:gap-6 overflow-hidden">
            <div className="flex flex-col gap-2">
                <p className="text-xl lg:text-[32px] font-bold">{album.name}</p>
                <div className="lg:text-lg">
                    {album.artists.length > 1 ? (
                        album.artists.map((artist, i) =>
                            i == album.artists.length - 1 ? (
                                <div key={i} className="flex gap-2">
                                    <div className="w-8 h-8 bg-neutral-500 rounded-full overflow-hidden">
                                        <Image
                                            src={artist.images[2].url}
                                            alt={artist.id}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <p>{artist.name}</p>
                                </div>
                            ) : (
                                <div key={i} className="flex gap-2">
                                    <div className="w-8 h-8 bg-neutral-500 rounded-full overflow-hidden">
                                        <Image
                                            src={artist.images[2].url}
                                            alt={artist.id}
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <p>{artist.name}, </p>
                                </div>
                            )
                        )
                    ) : (
                        <div className="flex gap-2">
                            <div className="w-8 h-8 bg-neutral-500 rounded-full overflow-hidden">
                                <Image
                                    src={album.artists[0].images[2].url}
                                    alt={album.artists[0].id}
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <p>{album.artists[0].name}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden">
                <Selector
                    rating={rating}
                    handleRating={(e) =>
                        handleRating(
                            e,
                            rating,
                            setRating,
                            updateAlbum,
                            album.id
                        )
                    }
                    variant="big"
                />
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
