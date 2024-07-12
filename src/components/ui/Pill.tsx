type PillProps = {
    children: React.ReactNode;
    toggle: boolean;
    handleToggle: (e: React.MouseEvent) => void;
};

export const Pill = ({ children, toggle, handleToggle }: PillProps) => {
    return (
        <div
            className={`px-2 py-1 text-xs hover:cursor-pointer rounded-xl transition-colors duration-100 inline-flex items-center gap-1 ${
                toggle ? "bg-orange-400 text-white" : "bg-white text-zinc-400"
            }`}
            onClick={handleToggle}
        >
            {children}
        </div>
    );
};
