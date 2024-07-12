import { useEffect, useRef } from "react";
import CardSuggestionAlbum from "@/components/Search/CardSuggestionAlbum";
import { DropdownSuggestionsAlbumsInterface } from "@/utils/interfaces";
import type { Album } from "@/utils/types";

export default function DropdownSuggestionsAlbums({
  albums,
  isLoading,
  selectedIndex
}: DropdownSuggestionsAlbumsInterface & { selectedIndex: number }) {
  const albumsToShow: Album[] = albums.slice(0, 20);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    if (selectedIndex >= 0 && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  }, [selectedIndex]);

  if (isLoading) return <p>Loading...</p>;
  if (!albums || albums.length === 0) return null;

  return (
    <ul className="flex-col-start-start gap-2 w-full max-h-96 overflow-scroll border border-border p-1 rounded">
      {albumsToShow.map((album, index) => (
        <CardSuggestionAlbum
          key={album.id}
          {...album}
          isSelected={index === selectedIndex}
          ref={(el) => (itemRefs.current[index] = el)}
        />
      ))}
    </ul>
  );
}
