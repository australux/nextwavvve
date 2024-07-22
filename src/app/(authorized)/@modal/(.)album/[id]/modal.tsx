"use client";

import { Button } from "@/components/ui/Button";
import { X } from "@/components/ui/Svgs";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const queryClient = useQueryClient();
    const dialogRef = useRef<ElementRef<"dialog">>(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        queryClient.invalidateQueries("savedAlbums");
        router.back();
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="hidden sm:contents h-full lg:h-[32.25rem] w-[26rem] lg:w-[51.875rem] overflow-hidden relative bg-card-base text-card-text"
            onClose={onDismiss}
        >
            {children}
            <div className="absolute top-2 right-2">
                <Button onClick={onDismiss} variant="icon">
                    <X className="w-5 stroke-2" />
                </Button>
            </div>
        </dialog>,
        document.getElementById("modal-root")!
    );
}
