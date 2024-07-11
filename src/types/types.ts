export type TAlbum = {
    id: string;
    name: string;
    artists: TArtist[];
    images: TImage[];
    rating?: string;
    tracks: TTrack[];
};

export type TArtist = {
    id: string;
    name: string;
};

export type TImage = {
    height: number;
    url: string;
    width: number;
};

export type TTrack = {
    id: string;
    name: string;
    rating?: string;
};
