import { getAlbum } from "@/server/queries";
import Image from "next/image";
import { AlbumDetails } from "./AlbumDetails";

export default async function FullPageAlbumView(props: { albumId: string }) {
    const album = await getAlbum(props.albumId);

    if (!album) {
        return;
    }

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_minmax(18.125rem,_1fr)] w-full max-w-screen-sm lg:max-w-screen-xl gap-6 p-2 h-[calc(100vh_-_4rem)] mt-16 bg-white">
            <div className="flex flex-col items-center">
                <div className="w-full h-full max-w-[18.125rem] max-h-[18.125rem] lg:max-w-[31.25rem] lg:max-h-[31.25rem] bg-black rounded overflow-hidden">
                    <Image
                        src={album.images[0].url}
                        alt={album.id}
                        height={600}
                        width={600}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
            <AlbumDetails album={album} />
        </div>
    );
}
