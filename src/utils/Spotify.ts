import type { Album } from "@/utils/types";

export const getSpotifyAlbums = async (req: string) => {
  const accessToken = import.meta.env.ENV_SPOTIFY_ACCESS_TOKEN as string;

  if (!accessToken) {
    throw new Error("No token provided");
  }

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${req}&type=album&limit=50`, {
      headers: {
        Authorization: `Authorization: Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    const albums: Album[] = data.albums.items;
    const filteredAlbums = checkIfTypeAlbum(albums);
    return filteredAlbums;
  } catch (error: any) {
    console.error(error);
    throw error;
  }
};

const checkIfTypeAlbum = (albums: Album[]) => {
  let filteredAlbums: Album[] = [];

  for (let i = 0; i < albums.length || filteredAlbums.length === 20; i++) {
    const album = albums[i];
    if (album && (album.album_type === "album" || album.album_type === "compilation")) {
      filteredAlbums.push(album);
    }
  }

  return filteredAlbums;
};
