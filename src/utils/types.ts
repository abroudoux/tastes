export type Album = {
  id: string;
  name: string;
  album_type: string;
  artists: Artist[];
  images: Image[];
  release_date: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  release_date_precision: string;
  type: string;
  uri: string;
  customPosition?: [number, number, number];
};

export type Artist = {
  id: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  href: string;
  type: string;
  uri: string;
};

export type Image = {
  url: string;
  height: number;
  width: number;
};
