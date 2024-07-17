"use client";

import { DesktopCard } from "@/components/AlbumCardDesktop";
import { MobileCard } from "@/components/AlbumCardMobile";
import { getSavedAlbums } from "@/server/queries";
import { useQuery } from "@tanstack/react-query";

export default function Albums() {
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

    return (
        <div className="mt-16">
            <h1 className="text-4xl font-black pl-4">Your Albums</h1>
            <div className="flex flex-col w-full max-w-screen-xl gap-4 px-4 md:px-2 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                {albumsList.map((album) => (
                    <div key={album.id}>
                        <MobileCard album={album} />
                        <DesktopCard album={album} />
                    </div>
                ))}
            </div>
        </div>
    );
}
