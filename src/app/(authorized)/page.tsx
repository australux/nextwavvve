import { createUser, getSavedAlbums, getUser } from "@/server/queries";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Albums from "./commons/albums";

export default async function Home() {
    const session = await getServerSession();
    const queryClient = new QueryClient();

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

    await queryClient.prefetchQuery({
        queryKey: ["savedAlbums"],
        queryFn: fetchAlbums,
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

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Albums />
        </HydrationBoundary>
    );
}
