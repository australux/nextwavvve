"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/Button";
import { redirect } from "next/navigation";

export const Profile = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    function handleOpen() {
        setOpen(!open);
    }

    if (session?.user) {
        return (
            <div className="flex gap-2 w-max">
                <Button
                    variant="secondary"
                    onClick={() => signOut({ callbackUrl: "/" })}
                >
                    Sign out
                </Button>
                <div
                    className="flex items-end justify-center h-[40px] w-[40px] overflow-hidden rounded-full bg-zinc-600 aspect-square"
                    onClick={handleOpen}
                >
                    <Image
                        src={String(session.user.image)}
                        alt={String(session.user.name)}
                        width={100}
                        height={100}
                    />
                </div>
            </div>
        );
    }
};
