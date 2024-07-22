import FullArtistView from "../../commons/FullArtistPage";

export default function ArtistPage({
    params: { id: artistId },
}: {
    params: { id: string };
}) {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <FullArtistView artistId={artistId} />
        </div>
    );
}
