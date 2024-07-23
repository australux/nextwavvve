import { HTMLAttributes } from "react";

type ListProps = HTMLAttributes<HTMLUListElement>;

export const List = ({ children, ...props }: ListProps) => {
    return (
        <ul
            className="flex flex-col w-full h-full sm:max-h-[414px] overflow-hidden"
            {...props}
        >
            <div className="overflow-y-scroll scrollbar-thin pr-2">
                {children}
            </div>
        </ul>
    );
};
