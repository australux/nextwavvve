"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "./ui/Svgs";
import { TTrack } from "@/types/types";
import { updateTrack } from "@/server/queries";
import { Selector } from "./ui/Selector";
import { handleRating } from "@/lib/utils";

type TrackProps = {
    track: TTrack;
};

export const Track = ({ track }: TrackProps) => {
    const [rating, setRating] = useState(track.rating);
    const [open, setOpen] = useState(false);

    // async function handleRating(e: React.MouseEvent) {
    //     const newRating = e.currentTarget.id;
    //     await updateTrack(track.id, newRating);
    //     setRating(newRating);
    // }

    return (
        <div
            className={`flex flex-col justify-between gap-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer ${
                open && "bg-white dark:bg-black"
            }`}
        >
            <div
                className="flex justify-between w-full p-2"
                onClick={() => setOpen(!open)}
            >
                <p className="line-clamp-2">{track.name}</p>
                <div className="flex items-center justify-end gap-2">
                    <ChevronUp
                        className={`w-4 h-4 stroke-2 transition duration-200 ${
                            rating !== "0" && "text-orange-400"
                        } ${open && "rotate-180"}`}
                    />
                </div>
            </div>
            {open && (
                <div className="flex justify-end px-4 pb-4">
                    <Selector
                        rating={rating}
                        handleRating={(e) =>
                            handleRating(
                                e,
                                rating,
                                setRating,
                                updateTrack,
                                track.id
                            )
                        }
                    />
                </div>
            )}
        </div>
    );
};
