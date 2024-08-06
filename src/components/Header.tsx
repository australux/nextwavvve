"use client";

import { Wavvve } from "./ui/Svgs";
import Link from "next/link";
import { useState } from "react";
import NavMenu from "./NavMenu";

export const Header = () => {
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <header className="fixed top-0 z-40 flex justify-center w-full h-16 p-2 bg-frosted">
            <div className="flex items-center justify-between w-full max-w-screen-xl gap-2 xl:px-4 relative -left-2">
                <div className="flex items-center justify-center w-24">
                    <Link href={"/"}>
                        <Wavvve className="w-16 sm:w-full" />
                    </Link>
                </div>
                <NavMenu />
            </div>
        </header>
    );
};
