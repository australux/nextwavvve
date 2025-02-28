"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "./ui/Svgs";
import { TTrack } from "@/types/types";
import { updateTrack } from "@/server/queries";

type TrackProps = {
    track: TTrack;
};

export const Track = ({ track }: TrackProps) => {
    const [rating, setRating] = useState(track.rating);
    const [open, setOpen] = useState(false);

    async function handleRating(e: React.MouseEvent) {
        const newRating = e.currentTarget.id;
        await updateTrack(track.id, newRating);
        setRating(newRating);
    }

    return (
        <div
            className={`flex flex-col justify-between gap-2 p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer ${
                open && "bg-white dark:bg-black"
            }`}
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between w-full">
                <p className="line-clamp-2">{track.name}</p>
                <div className="flex items-center justify-end gap-2">
                    {open ? (
                        <ChevronUp
                            className={`w-4 h-4 stroke-2 ${
                                rating !== "G" && "text-orange-400"
                            }`}
                        />
                    ) : (
                        <ChevronDown
                            className={`w-4 h-4 stroke-2 ${
                                rating !== "G" && "text-orange-400"
                            }`}
                        />
                    )}
                </div>
            </div>
            {open && (
                <div className="flex justify-end w-full gap-1">
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "F"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="F"
                        onClick={handleRating}
                    >
                        F
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "E"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="E"
                        onClick={handleRating}
                    >
                        E
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "D"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="D"
                        onClick={handleRating}
                    >
                        D
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "C"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="C"
                        onClick={handleRating}
                    >
                        C
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "B"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="B"
                        onClick={handleRating}
                    >
                        B
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "A"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="A"
                        onClick={handleRating}
                    >
                        A
                    </div>
                    <div
                        className={`font-black text-lg px-1 hover:cursor-pointer ${
                            rating === "S"
                                ? "text-orange-400"
                                : "text-zinc-400 hover:text-zinc-500"
                        }`}
                        id="S"
                        onClick={handleRating}
                    >
                        S
                    </div>
                </div>
            )}
        </div>
    );
};
