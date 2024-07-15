import { DesktopCard } from "@/components/AlbumCardDesktop";
import { MobileCard } from "@/components/AlbumCardMobile";
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

    const albumsList = await getSavedAlbums();
    if (!albumsList) {
        return null;
    }

    return (
        <div className="mt-16">
            <h1>Home Page</h1>
            <div className="flex flex-col w-full max-w-screen-xl gap-4 px-4 py-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
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
