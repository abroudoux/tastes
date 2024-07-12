import { create } from "zustand";

import type { Album } from "@/utils/types";

interface Store {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  albums: Album[];
  setAlbums: (value: Album[]) => void;
}

const useStore = create<Store>((set) => ({
  isLoading: false,
  albums: [],
  setIsLoading: (value: boolean) => set({ isLoading: value }),
  setAlbums: (value: Album[]) => set({ albums: value })
}));

export default useStore;
