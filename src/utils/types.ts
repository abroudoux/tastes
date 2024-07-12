export type Album = {
  id: string;
  name: string;
  album_type: string;
  artists: Artist[];
  images: Image[];
  release_date: string;
  total_tracks: number;
  url: string;
};

export type Artist = {
  id: string;
  url: string;
  name: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};
