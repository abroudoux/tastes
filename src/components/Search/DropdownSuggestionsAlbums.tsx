import CardSuggestionAlbum from "@/components/Search/CardSuggestionAlbum";

import { DropdownSuggestionsAlbumsProps } from "@/utils/interfaces";
import type { Album } from "@/utils/types";

export default function DropdownSuggestionsAlbums({
  albums,
  isLoading
}: DropdownSuggestionsAlbumsProps) {
  const albumsToShow: Album[] = albums.slice(0, 20);

  if (!albums || albums.length === 0) return null;
  if (isLoading) return <p>Loading...</p>;

  return (
    <ul className="flex-col-start-start gap-2 w-full max-h-96 overflow-scroll border border-border p-1 rounded">
      {albumsToShow.map((album) => (
        <CardSuggestionAlbum key={album.id} {...album} />
      ))}
    </ul>
  );
}
