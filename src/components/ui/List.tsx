import { HTMLAttributes } from "react";

type ListProps = HTMLAttributes<HTMLUListElement>;

export const List = ({ children, ...props }: ListProps) => {
    return (
        <>
            <ul
                className="absolute z-50 flex flex-col w-screen left-0 sm:w-full gap-2 sm:mt-2 sm:border rounded bg-white border-zinc-600 top-full h-[calc(100vh_-_4rem)] sm:max-h-[calc(100vh_-_18rem)] overflow-hidden"
                {...props}
            >
                <div className="flex flex-col gap-2 overflow-y-scroll scrollbar-thin">
                    {children}
                </div>
            </ul>
        </>
    );
};
