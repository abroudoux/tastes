import { useState } from "react";
import DropdownSuggestionsAlbums from "@/components/Search/DropdownSuggestionsAlbums";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getSpotifyAlbums } from "@/utils/Spotify";
import type { Album } from "@/utils/types";
import useStore from "@/lib/store";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const { isLoading, setIsLoading } = useStore();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setSearch(e.target.value);

    if (e.target.value) {
      try {
        const albums = await getSpotifyAlbums(e.target.value);
        setAlbums(albums);
      } catch (error) {
        console.error("Error fetching albums: ", error);
      }
    } else {
      setAlbums([]);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search" className="text-xl">
        Search an album
      </Label>
      <Input id="search" onChange={handleSearch} value={search} autoComplete="off" />
      <DropdownSuggestionsAlbums albums={albums} isLoading={isLoading} />
    </div>
  );
}
