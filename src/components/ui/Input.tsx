import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: "primary" | "secondary";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, type, ...props }, ref) => {
        return (
            <>
                <input
                    type={type}
                    className={cn(inputVariants({ variant, className }))}
                    ref={ref}
                    {...props}
                />
            </>
        );
    }
);
Input.displayName = "Input";

export { Input };

const inputVariants = cva(
    "px-4 py-2 text transition-colors bg-transparent border rounded focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                primary:
                    "border-neutral-800 focus-visible:ring-1 focus-visible:ring-neutral-800 dark:border-neutral-100 dark:focus-visible:ring-neutral-100",
                secondary:
                    "border-neutral-100 focus-visible:bg-neutral-100 dark:border-neutral-800 dark:focus-visible:bg-neutral-800",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);
