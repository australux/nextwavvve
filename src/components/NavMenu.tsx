"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "./ui/Button";
import { useState } from "react";
import { MagnifyingGlass } from "./ui/Svgs";
import { SearchModal } from "./SearchModal";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";

function AuthNavigation() {
    const { data: session } = useSession();
    const [open, setOpen] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    if (session) {
        return (
            <nav className="flex justify-center items-center gap-8 w-full">
                <Button
                    variant="secondary"
                    className="hidden sm:flex"
                    onClick={handleOpen}
                >
                    <MagnifyingGlass />
                    Search...
                </Button>
                {/* <Link href={"/lists"} className="hidden sm:flex gap-2 text-sm">
                    <ListBullet />
                    Lists
                </Link> */}
                {open && <SearchModal handleOpen={handleOpen} />}
                <SearchBar />
                <Profile />
            </nav>
        );
    }
    return (
        <>
            <Button onClick={() => signIn("spotify")}>Sign in</Button>
        </>
    );
}

export default function NavMenu() {
    return (
        <div>
            <AuthNavigation />
        </div>
    );
}
