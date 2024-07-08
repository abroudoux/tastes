const getSpotifyAlbums = async (token: string, req: string) => {
  const response = await fetch(`https://api.spotify.com/v1/${req}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response.json();
};
