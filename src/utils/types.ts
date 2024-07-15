export type Album = {
  id: string;
  name: string;
  album_type: string;
  artists: Artist[];
  images: Image[];
  release_date: string;
  total_tracks: number;
  external_urls: {
    spotify: string;
  };
  href: string;
  release_date_precision: string;
  type: string;
  uri: string;
  customPosition?: [number, number, number];
  tracks?: Track[];
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

export type Track = {
  id: string;
  name: string;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  is_local: boolean;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};
