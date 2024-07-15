import { useState } from "react";

import type { Album, Track } from "@/utils/types";
import { getSpotifyAlbums, getTracksFromAlbum } from "@/utils/spotify";
import useStore from "@/lib/store";

import DropdownSuggestionsAlbums from "@/components/Search/DropdownSuggestionsAlbums";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

export default function InputSearch() {
  const [search, setSearch] = useState("");
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const { isLoading, setIsLoading, addAlbumSelected, albumsSelected } = useStore();
  const { toast } = useToast();

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setSearch(e.target.value);

    if (e.target.value) {
      try {
        const albums = await getSpotifyAlbums(e.target.value);
        setAlbums(albums);
        setSelectedIndex(-1);
      } catch (error) {
        console.error("Error fetching albums: ", error);
        toast({
          variant: "destructive",
          description: "Error fetching albums"
        });
      }
    } else {
      setAlbums([]);
    }

    setIsLoading(false);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => (prevIndex === albums.length - 1 ? 0 : prevIndex + 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => (prevIndex <= 0 ? albums.length - 1 : prevIndex - 1));
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      const selectedAlbum = albums[selectedIndex];
      const tracks: Track[] = await getTracksFromAlbum(selectedAlbum.id);
      const albumWithTracks = { ...selectedAlbum, tracks };
      const albumExists = albums.some((album) => album.id === selectedAlbum.id);

      if (albumExists) {
        toast({
          variant: "destructive",
          description: "Album already selected"
        });
        return;
      }

      if (albums.length >= 20) {
        toast({
          variant: "destructive",
          description: "You can select up to 20 albums"
        });
        return;
      }

      addAlbumSelected(albumWithTracks);
      toast({
        variant: "default",
        description: "Album added"
      });
      setSearch("");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search" className="text-xl">
        Search an album
      </Label>
      <Input
        id="search"
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        value={search}
        autoComplete="off"
      />
      <DropdownSuggestionsAlbums
        albums={albums}
        isLoading={isLoading}
        selectedIndex={selectedIndex}
      />
    </div>
  );
}
