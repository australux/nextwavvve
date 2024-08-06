import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "icon" | "ghost";
    className?: string;
};

export const Button = ({ variant, className, ...props }: ButtonProps) => {
    return (
        <>
            <button
                {...props}
                className={cn(buttonVariants({ variant }), className)}
            />
        </>
    );
};

const buttonVariants = cva(
    "inline-flex items-center justify-center px-4 py-2 gap-2 transition-all duration-150 rounded-md hover:shadow text-sm group",
    {
        variants: {
            variant: {
                primary:
                    "bg-white hover:bg-neutral-100 text-black dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:text-white",
                secondary:
                    "bg-transparent hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800",
                ghost: "bg-transparent hover:bg-neutral-100 text-black dark:hover:bg-neutral-800 dark:text-white",
                icon: "p-1 rounded-full bg-neutral-50 opacity-75 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:opacity-100",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
