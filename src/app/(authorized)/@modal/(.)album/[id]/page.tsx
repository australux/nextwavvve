import FullPageAlbumView from "@/app/(authorized)/commons/FullAlbumPage";
import { Modal } from "./modal";

export default function AlbumModal({
    params: { id: albumId },
}: {
    params: { id: string };
}) {
    return (
        <Modal>
            <FullPageAlbumView albumId={albumId} />
        </Modal>
    );
}
