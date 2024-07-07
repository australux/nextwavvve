"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
    const session = useSession();
    console.log(session.data?.user);

    if (!session || session.status === "unauthenticated") {
        redirect("/login");
    }

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}
