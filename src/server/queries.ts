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
            savedAlbums: {
                create: {},
            },
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
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    const savedAlbums = await prisma.savedAlbums.findFirst({
        include: {
            albums: {
                include: {
                    artists: true,
                    images: true,
                    tracks: true,
                },
            },
        },
    });

    return savedAlbums;
}

export async function updateSavedAlbums(
    userId: string,
    {
        id,
        name,
        artists,
        images,
        tracks,
    }: {
        id: string;
        name: string;
        artists: { id: string; name: string }[];
        images: { url: string; height: number; width: number }[];
        tracks: { id: string; name: string }[];
    }
) {
    const session = await getServerSession();
    if (!session?.user) throw new Error("Unauthorized");

    try {
        return await prisma.savedAlbums.update({
            where: { userId: userId },
            data: {
                albums: {
                    create: {
                        id: id,
                        name: name,
                        artists: {
                            createMany: {
                                data: artists,
                            },
                        },
                        images: {
                            createMany: {
                                data: images,
                            },
                        },
                        tracks: {
                            createMany: {
                                data: tracks,
                            },
                        },
                    },
                },
            },
        });
    } catch (error) {
        console.error(error);
        throw new Error("Couldn't update saved albums");
    }
}
