"use client";

import { Button } from "@/components/ui/Button";
import { X } from "@/components/ui/Svgs";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="h-[32.25rem] w-[51.875rem] overflow-hidden relative"
            onClose={onDismiss}
        >
            {children}
            <div className="absolute top-2 right-2">
                <Button onClick={onDismiss} variant="icon">
                    <X className="w-5 text-black stroke-2" />
                </Button>
            </div>
        </dialog>,
        document.getElementById("modal-root")!
    );
}
