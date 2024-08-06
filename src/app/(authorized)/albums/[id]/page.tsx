import FullPageAlbumView from "../../commons/FullAlbumPage";

export default function AlbumPage({
    params: { id: albumId },
}: {
    params: { id: string };
}) {
    return (
        <div className="h-[calc(100vh_-_4rem)] w-screen-xl flex items-center justify-center">
            <FullPageAlbumView albumId={albumId} />
        </div>
    );
}
