"use server";
import prisma from "@/lib/db";
import { getServerSession } from "next-auth";

export async function createUser({
    name,
    image,
    email,
}: {
    name: string;
    image: string;
    email: string;
}) {
    const user = await prisma.user.create({
        data: {
            name: name,
            image: image,
            email: email,
        },
    });
    return user;
}

export async function getUser(email: string) {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });
    return user;
}

export async function getSavedAlbums() {
    const savedAlbums = await prisma.album.findMany({
        include: {
            images: true,
            artists: true,
            tracks: true,
            User: true,
        },
    });

    return savedAlbums;
}

export async function saveAlbum(album: {
    id: string;
    name: string;
    artists: { id: string; name: string }[];
    images: { url: string; height: number; width: number }[];
    tracks: { id: string; name: string }[];
}) {
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    const user = await getUser(String(session.user.email));
    if (!user) throw new Error("User not found");

    return await prisma.album.create({
        data: {
            id: album.id,
            name: album.name,
            artists: {
                createMany: {
                    data: album.artists,
                },
            },
            images: {
                createMany: {
                    data: album.images,
                },
            },
            tracks: {
                createMany: {
                    data: album.tracks,
                },
            },
            savedAt: new Date(),
            userId: user.id,
        },
    });
}

export async function deleteAlbum(id: string) {
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    return await prisma.album.delete({
        where: { id },
    });
}

export async function getAlbum(id: string) {
    return await prisma.album.findUnique({
        where: { id },
        include: {
            artists: true,
            images: true,
            tracks: true,
        },
    });
}

export async function updateAlbum(id: string, rating: string) {
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    return await prisma.album.update({
        where: { id },
        data: {
            rating,
        },
    });
}

export async function updateTrack(id: string, rating: string) {
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    return await prisma.track.update({
        where: { id },
        data: {
            rating,
        },
    });
}
