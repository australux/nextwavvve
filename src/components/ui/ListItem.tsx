import { HTMLAttributes } from "react";

type ListItemProps = HTMLAttributes<HTMLLIElement>;

export const ListItem = ({ children, ...props }: ListItemProps) => {
    return (
        <li
            className="p-2 duration-150 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:cursor-pointer hover:transition-colors"
            {...props}
        >
            {children}
        </li>
    );
};
