export type User = {
    id: string;
    name: string;
    email: string;
    image: string;
    savedAlbums?: TAlbum[];
};

export type TAlbum = {
    id: string;
    name: string;
    artists: TArtist[];
    images: TImage[];
    rating: string;
    tracks: TTrack[];
    User?: User;
    savedAt: Date;
};

export type TArtist = {
    id: string;
    name: string;
    images: TImage[];
    albums?: TAlbum[];
};

export type TImage = {
    id: number;
    height: number;
    url: string;
    width: number;
    artistId?: string | null;
    albumId?: string | null;
};

export type TTrack = {
    id: string;
    name: string;
    rating: string;
    albumId: string;
};
