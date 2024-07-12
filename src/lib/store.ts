import { create } from "zustand";

import type { Album } from "@/utils/types";

interface Store {
  isLoading: boolean;
  albumsSelected: Album[];
  setIsLoading: (value: boolean) => void;
  addAlbumSelected: (value: Album) => void;
  removeAlbumSelected: (value: Album) => void;
}

const useStore = create<Store>((set) => ({
  isLoading: false,
  albumsSelected: [],
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  addAlbumSelected: (value: Album) =>
    set((state) => ({ albumsSelected: [...state.albumsSelected, value] })),
  removeAlbumSelected: (value: Album) =>
    set((state) => ({
      albumsSelected: state.albumsSelected.filter((album) => album.id !== value.id)
    }))
}));

export default useStore;
