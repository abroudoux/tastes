export const getSpotifyAlbums = async (req: string) => {
  const accessToken = import.meta.env.ENV_SPOTIFY_ACCESS_TOKEN as string;

  if (!accessToken) {
    throw new Error("No token provided");
  }

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${req}&type=album&limit=20`, {
      headers: {
        Authorization: `Authorization: Bearer ${accessToken}`
      }
    });

    const data = await response.json();
    const albums = data.albums.items;
    return albums;
  } catch (error: any) {
    console.error(error);
  }
};
