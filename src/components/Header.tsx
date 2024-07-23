"use client";

import { useSession } from "next-auth/react";
import { Profile } from "./Profile";
import { MagnifyingGlass, Wavvve } from "./ui/Svgs";
import { SearchBar } from "./SearchBar";
import Link from "next/link";
import { useState } from "react";
import { SearchModal } from "./SearchModal";
import { Button } from "./ui/Button";

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
                    <div className="flex items-center justify-center w-24">
                        <Link href={"/"}>
                            <Wavvve className="w-16 sm:w-full" />
                        </Link>
                    </div>
                    <div className="flex justify-center sm:justify-end items-center gap-4 w-full">
                        <Button
                            variant="secondary"
                            className="hidden sm:flex"
                            onClick={handleOpen}
                        >
                            <MagnifyingGlass />
                            Search...
                        </Button>
                        {open && <SearchModal handleOpen={handleOpen} />}
                        <SearchBar />
                        <div className="w-12">
                            {session.user && <Profile />}
                        </div>
                    </div>
                </div>
            </header>
        );
    }
};
