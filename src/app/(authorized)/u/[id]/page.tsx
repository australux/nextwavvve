import { getSavedAlbums } from "@/server/queries";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import Albums from "../../commons/albums";

export default async function SavedAlbumsPage() {
    const queryClient = new QueryClient();

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
