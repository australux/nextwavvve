type SelectorProps = {
    value: string | undefined;
    handleRating?: (e: React.MouseEvent) => void;
};

export const Selector = ({ value, handleRating }: SelectorProps) => {
    return (
        <div className="flex gap-2">
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "F"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="F"
                onClick={handleRating}
            >
                F
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "E"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="E"
                onClick={handleRating}
            >
                E
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "D"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="D"
                onClick={handleRating}
            >
                D
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "C"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="C"
                onClick={handleRating}
            >
                C
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "B"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="B"
                onClick={handleRating}
            >
                B
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "A"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="A"
                onClick={handleRating}
            >
                A
            </div>
            <div
                className={`font-black text-2xl px-1 hover:cursor-pointer ${
                    value === "S"
                        ? "text-orange-400"
                        : "text-zinc-400 hover:text-zinc-500"
                }`}
                id="S"
                onClick={handleRating}
            >
                S
            </div>
        </div>
    );
};
