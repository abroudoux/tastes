export const getSpotifyAlbums = async (req: string) => {
  const accessToken = import.meta.env.ENV_SPOTIFY_ACCESS_TOKEN as string;

  if (!accessToken) {
    throw new Error("No token provided");
  }

  const response = await fetch(`https://api.spotify.com/v1/albums/${req}`, {
    headers: {
      Authorization: `Authorization: Bearer ${accessToken}`
    }
  });

  return response.json();
};
