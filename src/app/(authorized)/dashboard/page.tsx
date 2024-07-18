import { getSavedAlbums } from "@/server/queries";
import { TAlbum } from "@/types/types";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const AlbumTier = ({ tier, albums }: { tier: string; albums: TAlbum[] }) => {
    return (
        <div className="grid grid-cols-[5rem_1fr]">
            <p>{tier}</p>
            <div className="flex gap-2">
                {albums.map((album) => (
                    <div className="w-24 h-24" key={album.id}>
                        <Image
                            src={album.images[1].url}
                            alt={album.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default async function Dashboard() {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/login");
    }

    const albumsList = await getSavedAlbums();
    if (!albumsList) {
        return null;
    }

    const tiers: { [key: string]: TAlbum[] } = {
        S: [],
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
    };

    albumsList.forEach((album) => {
        const rating = album.rating || "G";
        if (rating in tiers) {
            tiers[rating].push(album);
        }
    });

    return (
        <div className="mt-16">
            <h1>Dashboard Page</h1>
            <div className="grid grid-rows-7 gap-2">
                {Object.entries(tiers).map(([key, albums]) => (
                    <AlbumTier key={key} tier={key} albums={albums} />
                ))}
            </div>
        </div>
    );
}
