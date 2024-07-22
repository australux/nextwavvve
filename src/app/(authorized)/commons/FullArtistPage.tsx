"use client";

import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Artist } from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";

export default function FullArtistView(props: { artistId: string }) {
    async function fetchArtist(id: string): Promise<Artist | undefined> {
        try {
            const res: Artist = await sdk.makeRequest("GET", `artists/${id}`);
            return res;
        } catch (error) {
            console.error(error);
        }
    }

    const { data: results, isLoading } = useQuery({
        queryFn: () => fetchArtist(props.artistId),
        queryKey: ["artist", props.artistId],
    });

    if (!results) return null;

    return <div>{results.name}</div>;
}
