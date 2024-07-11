import prisma from "@/lib/db";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/login");
    }

    const saved_albums = await prisma.savedAlbums.findFirst({
        include: {
            albums: {
                include: {
                    artists: true,
                    images: true,
                    tracks: true,
                },
            },
        },
    });

    if (!saved_albums) {
        return null;
    }

    return (
        <div>
            <h1>Home Page</h1>
            {saved_albums.albums.map((album) => (
                <div key={album.id}>
                    <p>{album.name}</p>
                    {album.artists.map((artist) => (
                        <p key={artist.id}>{artist.name}</p>
                    ))}
                </div>
            ))}
        </div>
    );
}
