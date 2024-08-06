"use client";

import sdk from "@/lib/spotify-sdk/ClientInstance";
import { Artist, Page, SimplifiedAlbum } from "@spotify/web-api-ts-sdk";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function FullArtistView(props: { artistId: string }) {
    async function fetchArtist(id: string): Promise<Artist | undefined> {
        try {
            const res: Artist = await sdk.makeRequest("GET", `artists/${id}`);
            return res;
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchArtistsAlbums(
        id: string
    ): Promise<Page<SimplifiedAlbum> | undefined> {
        try {
            const res: Page<SimplifiedAlbum> = await sdk.makeRequest(
                "GET",
                `artists/${id}/albums?limit=50&include_groups=album,compilation`
            );
            return res;
        } catch (error) {
            console.error(error);
        }
    }

    const { data: artist, isLoading } = useQuery({
        queryFn: () => fetchArtist(props.artistId),
        queryKey: ["artist", props.artistId],
    });

    const { data: albums } = useQuery({
        queryFn: () => fetchArtistsAlbums(props.artistId),
        queryKey: ["artists_albums", props.artistId],
    });

    if (!artist || !albums) return null;

    return (
        <div className="overflow-hidden">
            <div className="flex gap-4 items-end justify-between bg-neutral-900">
                <p className="text-4xl font-bold pl-6 pb-4">{artist.name}</p>
                <div className="h-full overflow-hidden relative">
                    <Image
                        src={artist.images[0].url}
                        alt={artist.name}
                        width={300}
                        height={300}
                    />
                    <div className="absolute left-0 top-0 z-10 bg-gradient-to-r from-neutral-900 to-transparent w-[150px] h-[300px]" />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 h-[400px] overflow-auto bg-l">
                {albums.items.flatMap((album) => (
                    <Link key={album.id} href={`/a/${album.id}`}>
                        <img
                            src={album.images[1].url}
                            alt={album.name}
                            className="w-full"
                        />
                        <p className="text-sm">{album.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
