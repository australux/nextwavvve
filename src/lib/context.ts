"use client";
import { TAlbum } from "@/types/types";
import { createContext, useContext } from "react";

export const AlbumCardContext = createContext<TAlbum | undefined>(undefined);

export function useAlbumContext() {
    const album = useContext(AlbumCardContext);

    if (album === undefined) {
        throw new Error(
            "useAlbumCardContext must be used with a AlbumCardContext"
        );
    }

    return album;
}
