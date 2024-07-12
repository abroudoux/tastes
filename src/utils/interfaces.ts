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

export interface SceneInterface {
  setAlbumData: (album: Album | null) => void;
  setHoveredAlbumData: (album: Album | null) => void;
  albumData: Album | null;
}

export interface ItemInterface {
  position: [number, number, number];
  size: [number, number, number];
  album: Album;
  handleClick: (album: Album) => void;
  handleHover: (album: Album) => void;
  index: number;
  isACoverClicked: boolean;
  isSelected: boolean;
}

export interface AlbumDetailsInterface {
  album: Album;
}
