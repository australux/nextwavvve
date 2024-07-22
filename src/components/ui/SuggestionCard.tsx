import { Artist, SimplifiedAlbum, Track } from "@spotify/web-api-ts-sdk";
import Image from "next/image";
import Link from "next/link";

type SuggestionProps = React.HTMLAttributes<HTMLDivElement> & {
    album?: SimplifiedAlbum;
    artist?: Artist;
    track?: Track;
};

export const AlbumSuggestion = ({ album, ...props }: SuggestionProps) => {
    if (!album) return null;
    return (
        <div
            {...props}
            className="grid grid-cols-[64px_1fr] w-full gap-4 text-sm"
        >
            <div className="w-16 h-16 overflow-hidden rounded aspect-square">
                <Image
                    src={album.images[1].url}
                    alt={album.id}
                    width={100}
                    height={100}
                    priority={true}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex items-center w-full overflow-hidden">
                <p className="line-clamp-2">{album.name}</p>
            </div>
        </div>
    );
};

export const ArtistSuggestion = ({ artist, ...props }: SuggestionProps) => {
    if (!artist) return null;
    return (
        <Link href={`/artists/${artist.id}`}>
            <div
                {...props}
                className="grid grid-cols-[64px_1fr] items-center gap-4 w-full"
            >
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    {artist.images.length ? (
                        <Image
                            src={artist.images[1].url}
                            alt={artist.name}
                            width={100}
                            height={100}
                            priority={true}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-orange-400">
                            <span className="text-4xl font-black">
                                {artist.name.slice(0, 1)}
                            </span>
                        </div>
                    )}
                </div>
                <p className="line-clamp-1">{artist.name}</p>
            </div>
        </Link>
    );
};

export const TrackSuggestion = ({ track, ...props }: SuggestionProps) => {
    if (!track) return null;
    return (
        <div className="grid grid-cols-[64px_1fr] items-center gap-4 w-full">
            <div className="w-16 h-16 rounded overflow-hidden">
                <Image
                    src={track.album.images[1].url}
                    alt={track.name}
                    width={100}
                    height={100}
                    priority={true}
                    className="w-full h-full object-cover"
                />
            </div>
            <p className="line-clamp-1">{track.name}</p>
        </div>
    );
};
