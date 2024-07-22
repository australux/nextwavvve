"use client";

import { useSession } from "next-auth/react";
import { Profile } from "./Profile";
import { Wavvve } from "./ui/Svgs";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

export const Header = () => {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    if (session) {
        return (
            <header className="fixed z-40 flex justify-center w-full h-16 p-2 bg-frosted">
                <div className="flex items-center justify-between w-full max-w-screen-xl gap-2 xl:px-4 relative -left-2">
                    <div className="flex items-center w-fit">
                        <Link href={"/"}>
                            <Wavvve />
                        </Link>
                    </div>
                    <div className="flex justify-center w-full">
                        <p className="hidden sm:inline" onClick={handleOpen}>
                            Search
                        </p>
                        {open && <SearchModal handleOpen={handleOpen} />}
                        <SearchBar />
                    </div>
                    <div className="w-16">{session.user && <Profile />}</div>
                </div>
            </header>
        );
    }
};
