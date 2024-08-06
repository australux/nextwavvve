import { createUser, getSavedAlbums, getUser } from "@/server/queries";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession();

    if (!session || !session.user) {
        return <div>no session</div>;
    }

    const email = String(session.user.email);
    const name = String(session.user.name);
    const image = String(session.user.image);

    const userExists = await getUser(email);
    if (!userExists) {
        await createUser({ name, image, email });
    }

    const sessionEmail = session.user?.email;
    if (sessionEmail) {
        const user = await getUser(sessionEmail);
        redirect(`/u/${user?.id}`);
    }

    return null;
}
