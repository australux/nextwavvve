import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Button } from "./ui/Button";

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
            className="h-screen w-screen md:w-80 text-card-text bg-card-base md:rounded border border-zinc-600 mr-0"
        >
            {children}
        </dialog>,
        document.getElementById("navbar-root")!
    );
}
