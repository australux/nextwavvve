import FullPageAlbumView from "../../commons/FullAlbumPage";

export default function AlbumPage({
    params: { id: albumId },
}: {
    params: { id: string };
}) {
    return <FullPageAlbumView albumId={albumId} />;
}
