"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export const Profile = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <div
                className="relative flex items-center justify-end gap-2 hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <div className="flex items-end justify-center h-[40px] overflow-hidden rounded-full bg-zinc-200 aspect-square">
                    <Image
                        src={String(session.user.image)}
                        alt={String(session.user.name)}
                        width={100}
                        height={100}
                    />
                </div>
                {open && (
                    <div className="absolute right-0 z-30 flex flex-col gap-2 p-2 mt-2 bg-white border rounded w-max top-full border-zinc-600">
                        <p className="text-sm font-semibold text-zinc-600">
                            {session.user.name}
                        </p>
                        <button
                            className="text-black"
                            onClick={() => signOut()}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        );
    }
};
