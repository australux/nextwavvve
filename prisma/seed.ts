import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const userWithData = await prisma.user.create({
        data: {
            id: "11154448458",
            image: "https://scontent-cdg4-1.xx.fbcdn.net/v/t31.18172-1/21993175_1612171098847917_9208209011408237851_o.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=105&ccb=1-7&_nc_sid=312bcd&_nc_ohc=oKdoP9ju0rcQ7kNvgGjYaBs&_nc_ht=scontent-cdg4-1.xx&edm=AP4hL3IEAAAA&oh=00_AYApy2D2ade9FoxsEvzHFyov6dP_-Y57D9Ftqi2V4FIwLg&oe=66B371E6",
            name: "Luciano Montilla",
            savedAlbums: {
                create: {
                    albums: {
                        create: {
                            id: "5Gm2XKBgnlzd6qTi7LE1z2",
                            name: "Alone At Prom",
                            images: {
                                createMany: {
                                    data: [
                                        {
                                            url: "https://i.scdn.co/image/ab67616d0000b2730c5f23cbf0b1ab7e37d0dc67",
                                            height: 640,
                                            width: 640,
                                        },
                                        {
                                            url: "https://i.scdn.co/image/ab67616d00001e020c5f23cbf0b1ab7e37d0dc67",
                                            height: 300,
                                            width: 300,
                                        },
                                        {
                                            url: "https://i.scdn.co/image/ab67616d000048510c5f23cbf0b1ab7e37d0dc67",
                                            height: 64,
                                            width: 64,
                                        },
                                    ],
                                },
                            },
                            artists: {
                                create: {
                                    id: "2jku7tDXc6XoB6MO2hFuqg",
                                    name: "Tory Lanez",
                                },
                            },
                            rating: "G",
                            tracks: {
                                createMany: {
                                    data: [
                                        {
                                            id: "2sw9r0DEwO1Nqg6eBtsCcc",
                                            name: "Enchanted Waterfall",
                                        },
                                        {
                                            id: "6GGmABM6AMwMzEhK7szqJT",
                                            name: "Pink Dolphin Sunset (feat. Tee)",
                                        },
                                        {
                                            id: "31zNgkbLt8McmjDrh6XKY9",
                                            name: "Midnight's Interlude",
                                        },
                                        {
                                            id: "3azJifCSqg9fRij2yKIbWz",
                                            name: "The Color Violet",
                                        },
                                        {
                                            id: "1au2UduxcvHfa0fZS3Szci",
                                            name: "Lavender Sunflower",
                                        },
                                        {
                                            id: "2PLOCIYlFr8XxNsz0Lgs4l",
                                            name: "Ballad of a Badman",
                                        },
                                        {
                                            id: "6ieWL5CLN9WdC875guWtMe",
                                            name: "Lady Of Namek",
                                        },
                                        {
                                            id: "2gHQ7upBrDEFOZZTO6ktbZ",
                                            name: "Pluto's Last Comet",
                                        },
                                        {
                                            id: "17sPXQa8bT24ToCYHXuQXI",
                                            name: "'87 Stingray",
                                        },
                                        {
                                            id: "6VKNW0svDbddkdNDGAE0NY",
                                            name: "Hurt From Mercury",
                                        },
                                        {
                                            id: "29Hn3L56DQ6y7W249oVxqd",
                                            name: "Last Kiss Of Nebulon",
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            },
        },
    });

    console.log("Database has been seeded");
    console.dir(userWithData, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect;
    })
    .catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    });
