import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { getServerSession } from "next-auth";
import AuthSessionProvider from "@/components/SessionProvider";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Header } from "@/components/Header";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <AuthSessionProvider session={session}>
                <body className={inter.className}>
                    <Providers>
                        <div className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
                            <Header />
                            <main className="overflow-hidden">
                                {children}
                                {modal}
                                <div id="modal-root" />
                            </main>
                        </div>
                    </Providers>
                </body>
            </AuthSessionProvider>
        </html>
    );
}
