"use client";

import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function AuthSessionProvider({
    session,
    children,
}: {
    session: Session | null | undefined;
    children: React.ReactNode;
}) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
