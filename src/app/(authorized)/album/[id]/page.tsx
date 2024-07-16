import FullPageAlbumView from "../../commons/FullAlbumPage";

export default function AlbumPage({
    params: { id: albumId },
}: {
    params: { id: string };
}) {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <FullPageAlbumView albumId={albumId} />
        </div>
    );
}
