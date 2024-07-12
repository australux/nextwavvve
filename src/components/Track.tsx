import { useState } from "react";
import { ChevronDown, ChevronUp } from "./ui/Svgs";
import { TTrack } from "@/types/types";
// import { useLocalStorage } from "@/hooks/useLocalStorage";

type TrackProps = {
    track: TTrack;
};

export const Track = ({ track }: TrackProps) => {
    const [rating, setRating] = useState(track.rating);
    const [open, setOpen] = useState(false);
    // const { updateItem } = useLocalStorage("saved_albums");

    function handleRating(e: React.MouseEvent) {
        const newRating = e.currentTarget.id;
        // updateItem(track.id, newRating);
        setRating(newRating);
    }

    return (
        <div
            className={`flex flex-col justify-between gap-2 p-2 rounded hover:bg-zinc-100 text-black ${
                open && "bg-white"
            }`}
        >
            <div
                className="flex justify-between w-full"
                onClick={() => setOpen(!open)}
            >
                <p className="line-clamp-2">{track.name}</p>
                <div className="flex items-center justify-end gap-2">
                    {open ? (
                        <ChevronUp
                            className={`w-4 h-4 stroke-2 ${
                                rating && "text-orange-400"
                            }`}
                        />
                    ) : (
                        <ChevronDown
                            className={`w-4 h-4 stroke-2 ${
                                rating && "text-orange-400"
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
