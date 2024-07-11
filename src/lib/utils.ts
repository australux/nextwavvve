import { getUser, updateSavedAlbums } from "@/server/queries";
import { Album } from "@spotify/web-api-ts-sdk";
import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function handleSelection(userEmail: string, album: Album) {
    const formatedAlbum = {
        id: album.id,
        name: album.name,
        artists: album.artists.map((artist) => ({
            id: artist.id,
            name: artist.name,
        })),
        images: album.images,
        tracks: album.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
        })),
    };
    const user = await getUser(userEmail);
    if (user) {
        await updateSavedAlbums(user.id, formatedAlbum);
    }
}
