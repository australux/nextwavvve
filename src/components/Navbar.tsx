import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Navbar({
    children,
    handleOpen,
}: {
    children: React.ReactNode;
    handleOpen: () => void;
}) {
    const navRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!navRef.current?.open) {
            navRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        handleOpen();
    }

    return createPortal(
        <dialog
            ref={navRef}
            onClose={onDismiss}
            onClick={(e) => e.stopPropagation()}
            className="h-screen w-screen md:w-80 text-black bg-white dark:text-white dark:bg-black md:rounded border border-zinc-600"
        >
            {children}
        </dialog>,
        document.getElementById("navbar-root")!
    );
}
