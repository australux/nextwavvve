import { HTMLAttributes } from "react";

type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, ...props }: ListItemProps) => {
    return (
        <li
            className="p-2 duration-150 rounded-md hover:bg-zinc-100 hover:cursor-pointer hover:transition-colors"
            {...props}
        >
            {children}
        </li>
    );
};
