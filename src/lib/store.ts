import { create } from "zustand";

import type { Album } from "@/utils/types";
import { StoreInterface } from "@/utils/interfaces";

import albums from "@/data/albums";

const useStore = create<StoreInterface>((set) => ({
  isLoading: false,
  // to facilitate testing, I use default data
  albumsSelected: albums,
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  addAlbumSelected: (value: Album) =>
    set((state) => ({ albumsSelected: [...state.albumsSelected, value] })),
  removeAlbumSelected: (value: Album) =>
    set((state) => ({
      albumsSelected: state.albumsSelected.filter((album) => album.id !== value.id)
    }))
}));

export default useStore;
