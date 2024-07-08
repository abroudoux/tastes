import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getSpotifyAlbums } from "@/utils/Spotify";

export default function InputSearch() {
  const [search, setSearch] = useState("");

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const results = await getSpotifyAlbums(search);
    console.log(results);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor="search">Search</Label>
      <Input id="search" onChange={handleSearch} />
    </div>
  );
}
