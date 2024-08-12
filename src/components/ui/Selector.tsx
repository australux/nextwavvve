import { HTMLAttributes, useState } from "react";
import { LeftHalf, RightHalf } from "./Svgs";

type SelectorProps = {
    rating: string | undefined;
    handleRating?: (e: React.MouseEvent) => void;
    variant?: "big" | "small";
};

type StarProps = HTMLAttributes<HTMLDivElement> & {
    value: string[];
    onClick?: any;
    rating: string | undefined;
    hovered?: string | null;
    onHover: (value: string | null) => void;
    className?: string;
};

const Star = ({
    value,
    onClick,
    rating,
    hovered,
    onHover,
    className,
}: StarProps) => {
    return (
        <div
            className={`flex fill-neutral-300 dark:fill-neutral-600 ${className}`}
        >
            <LeftHalf
                id={value[0]}
                onClick={onClick}
                className={`h-max ${
                    hovered && hovered >= value[0]
                        ? "fill-neutral-600 dark:fill-neutral-300 opacity-100"
                        : rating &&
                          rating >= value[0] &&
                          "fill-neutral-600 dark:fill-neutral-300 opacity-80"
                }`}
                onMouseEnter={() => onHover(value[0])}
                onMouseLeave={() => onHover(null)}
            />
            <RightHalf
                id={value[1]}
                onClick={onClick}
                className={`h-max ${
                    hovered && hovered >= value[1]
                        ? "fill-neutral-600 dark:fill-neutral-300 opacity-100"
                        : rating &&
                          rating >= value[1] &&
                          "fill-neutral-600 dark:fill-neutral-300 opacity-80"
                }`}
                onMouseEnter={() => onHover(value[1])}
                onMouseLeave={() => onHover(null)}
            />
        </div>
    );
};

export const Selector = ({ rating, handleRating, variant }: SelectorProps) => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="flex gap-1">
            <Star
                value={["0.5", "1"]}
                onClick={handleRating}
                rating={rating}
                hovered={hovered}
                onHover={setHovered}
                className={variant === "big" ? "w-9" : "w-6"}
            />
            <Star
                value={["1.5", "2"]}
                onClick={handleRating}
                rating={rating}
                hovered={hovered}
                onHover={setHovered}
                className={variant === "big" ? "w-9" : "w-6"}
            />
            <Star
                value={["2.5", "3"]}
                onClick={handleRating}
                rating={rating}
                hovered={hovered}
                onHover={setHovered}
                className={variant === "big" ? "w-9" : "w-6"}
            />
            <Star
                value={["3.5", "4"]}
                onClick={handleRating}
                rating={rating}
                hovered={hovered}
                onHover={setHovered}
                className={variant === "big" ? "w-9" : "w-6"}
            />
            <Star
                value={["4.5", "5"]}
                onClick={handleRating}
                rating={rating}
                hovered={hovered}
                onHover={setHovered}
                className={variant === "big" ? "w-9" : "w-6"}
            />
        </div>
    );
};
