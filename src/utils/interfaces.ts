import type { Album } from "@/utils/types";

export interface DropdownSuggestionsAlbumsInterface {
  albums: Album[];
  isLoading: boolean;
}

export interface StoreInterface {
  isLoading: boolean;
  albumsSelected: Album[];
  setIsLoading: (value: boolean) => void;
  addAlbumSelected: (value: Album) => void;
  removeAlbumSelected: (value: Album) => void;
}
