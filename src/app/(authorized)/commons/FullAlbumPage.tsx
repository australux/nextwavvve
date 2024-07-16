import { getAlbum } from "@/server/queries";
import Image from "next/image";
import { AlbumDetails } from "./AlbumDetails";

export default async function FullPageAlbumView(props: { albumId: string }) {
    const album = await getAlbum(props.albumId);

    if (!album) {
        return;
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(31.25rem,_1fr)_minmax(0,_1fr)] w-full h-full max-h-[38.5rem] gap-6 p-2 overflow-hidden">
            <div className="flex flex-col items-center">
                <div className="w-full h-auto max-w-[37.5rem] max-h-[37.5rem] bg-black rounded overflow-hidden">
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
