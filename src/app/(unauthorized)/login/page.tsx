"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Login() {
    const session = useSession();

    if (!session || session.status !== "authenticated") {
        return (
            <div>
                <button onClick={() => signIn("spotify")}>
                    Sign in with Spotify
                </button>
            </div>
        );
    }

    redirect("/");
}
