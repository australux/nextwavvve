import FullArtistView from "../../commons/FullArtistPage";

export default function ArtistPage({
    params: { id: artistId },
}: {
    params: { id: string };
}) {
    return (
        <div className="h-[calc(100vh_-_4rem)] max-w-screen-xl flex items-center justify-center">
            <FullArtistView artistId={artistId} />
        </div>
    );
}
