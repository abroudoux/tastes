import CardSuggestionAlbum from "@/components/Search/CardSuggestionAlbum";

import type { Album } from "@/utils/types";

export default function DropdownSuggestionsAlbums(albums: Album[]) {
  if (!albums || !Array.isArray(albums)) return null;

  return (
    <ul className="flex-col-start-center gap-2">
      {albums?.map((album) => <CardSuggestionAlbum key={album.id} {...album} />)}
    </ul>
  );
}
