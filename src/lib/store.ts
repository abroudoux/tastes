import { create } from "zustand";

interface Store {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const useStore = create<Store>((set) => ({
  isLoading: false,
  setIsLoading: (value: boolean) => set({ isLoading: value })
}));

export default useStore;
