import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import AuthSessionProvider from "@/components/SessionProvider";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <AuthSessionProvider session={session}>
                <body className={inter.className}>
                    <main className="flex min-h-screen flex-col items-center justify-between p-24">
                        {children}
                    </main>
                </body>
            </AuthSessionProvider>
        </html>
    );
}
