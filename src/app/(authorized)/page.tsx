import { createUser, getSavedAlbums, getUser } from "@/server/queries";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();
    if (!session || !session.user) {
        redirect("/login");
    }

    const email = String(session.user.email);
    const name = String(session.user.name);
    const image = String(session.user.image);

    const userExists = await getUser(email);
    if (!userExists) {
        await createUser({ name, image, email });
    }

    const saved_albums = await getSavedAlbums();
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
