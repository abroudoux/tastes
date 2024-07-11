import { useState } from "react";

import CardSuggestionAlbum from "@/components/Search/CardSuggestionAlbum";
import DropdownSuggestionsAlbums from "@/components/Search/DropdownSuggestionsAlbums";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getSpotifyAlbums } from "@/utils/Spotify";
import type { Album } from "@/utils/types";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const albums = await getSpotifyAlbums(search);
    setAlbums(albums);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search" className="text-xl">
        Search an album
      </Label>
      <Input id="search" onChange={handleSearch} value={search} autoComplete="off" />
      <DropdownSuggestionsAlbums {...albums} />
    </div>
  );
}
