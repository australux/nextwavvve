import { getUser, saveAlbum } from "@/server/queries";
import { Album, Artist } from "@spotify/web-api-ts-sdk";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import sdk from "@/lib/spotify-sdk/ClientInstance";
import { TAlbum } from "@/types/types";
import { SetStateAction } from "react";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function handleSelection(userEmail: string, album: Album) {
    const artists: Artist[] = await Promise.all(
        album.artists.map(async (artist) => {
            return await sdk.makeRequest("GET", `artists/${artist.id}`);
        })
    );

    const formatedAlbum = {
        id: album.id,
        name: album.name,
        artists: artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
            images: artist.images,
        })),
        images: album.images,
        tracks: album.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
        })),
    };
    const user = await getUser(userEmail);
    if (user) {
        try {
            await saveAlbum(formatedAlbum);
        } catch (error) {
            console.error(error);
        }
    }
}

export async function handleRating(
    e: React.MouseEvent,
    rating: string | undefined,
    setRating: React.Dispatch<SetStateAction<string>>,
    updateFn: (id: string, rating: string) => Promise<any>,
    id: string
) {
    const newRating = e.currentTarget.id;

    if (newRating !== rating) {
        await updateFn(id, newRating);
        setRating(newRating);
    } else {
        await updateFn(id, "0");
        setRating("0");
    }
}
