import { TAlbum } from "@/types/types";
import Image from "next/image";
import { Button } from "./ui/Button";
import { LeftHalf, RightHalf, X } from "./ui/Svgs";
import { deleteAlbum } from "@/server/queries";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Star = ({ value, rating }: { value: string[]; rating: string }) => {
    return (
        <div className="flex w-10 fill-neutral-300 dark:fill-neutral-600">
            <LeftHalf
                id={value[0]}
                className={`h-max ${
                    rating &&
                    rating >= value[0] &&
                    "fill-neutral-600 dark:fill-neutral-300 opacity-80"
                }`}
            />
            <RightHalf
                id={value[1]}
                className={`h-max ${
                    rating &&
                    rating >= value[1] &&
                    "fill-neutral-600 dark:fill-neutral-300 opacity-80"
                }`}
            />
        </div>
    );
};

const RatingDisplay = ({ rating }: { rating: string }) => {
    return (
        <div className="flex gap-1">
            <Star value={["0.5", "1"]} rating={rating} />
            <Star value={["1.5", "2"]} rating={rating} />
            <Star value={["2.5", "3"]} rating={rating} />
            <Star value={["3.5", "4"]} rating={rating} />
            <Star value={["4.5", "5"]} rating={rating} />
        </div>
    );
};

export const AlbumCard = ({ album }: { album: TAlbum }) => {
    const router = useRouter();

    async function handleDelete(id: string) {
        await deleteAlbum(id);
        router.refresh();
    }
    return (
        <div className="relative group rounded overflow-hidden">
            <Link href={`/albums/${album.id}`} prefetch={true} scroll={false}>
                <Image
                    src={album.images[0].url}
                    alt={album.id}
                    width={500}
                    height={600}
                />
                <div className="h-1/2 bg-gradient-to-b from-transparent to-neutral-950 flex justify-center items-end pb-6 absolute bottom-0 w-full opacity-0 group-hover:opacity-100 transition duration-150">
                    <RatingDisplay rating={album.rating} />
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition duration-150">
                    <Button
                        onClick={() => handleDelete(album.id)}
                        variant="icon"
                    >
                        <X className="w-5 stroke-2" />
                    </Button>
                </div>
            </Link>
        </div>
    );
};
