"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Button } from "./ui/Button";
import { X } from "./ui/Svgs";
import Link from "next/link";

export const Profile = () => {
    const [open, setOpen] = useState(false);
    const { data: session } = useSession();

    function handleOpen() {
        setOpen(!open);
    }

    if (session?.user) {
        return (
            <div
                className="flex items-center justify-end gap-2 hover:cursor-pointer ring-2 w-max rounded-full ring-zinc-500"
                onClick={handleOpen}
            >
                <div className="flex items-end justify-center h-[40px] overflow-hidden rounded-full bg-zinc-600 aspect-square">
                    <Image
                        src={String(session.user.image)}
                        alt={String(session.user.name)}
                        width={100}
                        height={100}
                    />
                </div>
                {open && (
                    <Navbar handleOpen={handleOpen}>
                        <div className="flex flex-col gap-2 p-2 items-start">
                            <div className="w-full flex gap-2 justify-between items-start group">
                                <Link
                                    href={"/dashboard"}
                                    className="flex items-center gap-4 hover:bg-card-secondary p-2 rounded w-full"
                                >
                                    <div className="flex items-end justify-center h-[40px] overflow-hidden rounded-full bg-zinc-600 aspect-square">
                                        <Image
                                            src={String(session.user.image)}
                                            alt={String(session.user.name)}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                    <p className="font-medium text-sm line-clamp-1 group-hover:underline">
                                        {session.user.name}
                                    </p>
                                </Link>
                                <Button variant="icon">
                                    <X className="stroke-2 w-6" />
                                </Button>
                            </div>
                            <Button variant="dark" onClick={() => signOut()}>
                                Logout
                            </Button>
                        </div>
                    </Navbar>
                )}
            </div>
        );
    }
};
