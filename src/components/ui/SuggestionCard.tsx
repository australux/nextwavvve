import { SimplifiedAlbum } from "@spotify/web-api-ts-sdk";
import Image from "next/image";

type SugsestionProps = React.HTMLAttributes<HTMLDivElement> & {
    album: SimplifiedAlbum;
};

export const SuggestionCard = ({ album, ...props }: SugsestionProps) => {
    return (
        <div
            {...props}
            className="grid grid-cols-[1fr_3fr] w-full gap-2 text-sm"
        >
            <div className="w-[80px] h-[80px] overflow-hidden rounded-md aspect-square">
                <Image
                    src={album.images[1].url}
                    alt={album.id}
                    width={100}
                    height={100}
                    priority={true}
                />
            </div>
            <div className="flex items-center w-full overflow-hidden">
                <p className="line-clamp-2">{album.name}</p>
            </div>
        </div>
    );
};
