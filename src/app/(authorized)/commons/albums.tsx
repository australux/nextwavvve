"use client";

import { AlbumCard } from "@/components/AlbumCard";
import { DesktopCard } from "@/components/AlbumCardDesktop";
import { MobileCard } from "@/components/AlbumCardMobile";
import { getSavedAlbums, getUser } from "@/server/queries";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function Albums() {
    const { data: session } = useSession();

    const { data: albumsList } = useQuery({
        queryKey: ["savedAlbums"],
        queryFn: () => fetchAlbums(),
    });

    async function fetchAlbums() {
        try {
            const res = await getSavedAlbums();
            return res;
        } catch (error) {
            console.error(error);
            throw new Error("Error fetching albums");
        }
    }

    if (!albumsList) {
        return null;
    }

    return {
        ...(albumsList.length > 0 ? (
            <div>
                <h1 className="text-2xl sm:text-4xl font-black pl-4 py-4">
                    {session
                        ? "My Albums"
                        : `${albumsList[0].User.name.split(" ")[0]}'s Albums`}
                </h1>
                <div className="flex flex-col w-full max-w-screen-xl gap-4 px-4 md:px-2 py-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {albumsList.map((album) => (
                        <div key={album.id}>
                            <AlbumCard album={album} />
                            {/* <MobileCard album={album} /> */}
                            {/* <DesktopCard album={album} /> */}
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="flex flex-col items-center">
                <p>You have no saved albums</p>
                <p>Search albums and add them to your collection</p>
            </div>
        )),
    };
}
