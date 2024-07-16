"use client";

import { useSession } from "next-auth/react";
import { Profile } from "./Profile";
import { Wavvve } from "./ui/Svgs";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

export const Header = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <header className="fixed z-40 flex justify-center w-full h-16 p-2 bg-zinc-100">
                <div className="flex items-center justify-between w-full max-w-screen-xl gap-2 xl:px-4 relative -left-2">
                    <div className="flex items-center h-full">
                        <Link href={"/"}>
                            <Wavvve />
                        </Link>
                    </div>
                    <div className="flex justify-center w-full">
                        <SearchBar />
                    </div>
                    <div className="w-16">{session.user && <Profile />}</div>
                </div>
            </header>
        );
    }
};
