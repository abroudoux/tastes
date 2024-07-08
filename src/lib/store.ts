import { create } from 'zustand';


const savedToken = localStorage.getItem('token');
const username = localStorage.getItem('username');

interface Store {
    token: boolean;
    isDeleting: boolean;
    isUpdating: boolean;
    isLoading: boolean;
    isCreating: boolean;
    username: string;
    signIn: () => void;
    signOut: () => void;
    setIsDeleting: (value: boolean) => void;
    setIsUpdating: (value: boolean) => void;
    setIsLoading: (value: boolean) => void;
    setIsCreating: (value: boolean) => void;
    setUsername: (value: string) => void;
};

const useStore = create<Store>((set) => ({
    token: savedToken ? JSON.parse(savedToken) : false,
    isDeleting: false,
    isUpdating: false,
    isLoading: false,
    isCreating: false,
    username: username ? JSON.parse(username) : '',
    signIn: () => {
        set({ token: true });
        localStorage.setItem('token', JSON.stringify(true));
    },
    signOut: () => {
        set({ token: false });
        localStorage.removeItem('token');
        localStorage.removeItem('username');
    },
    setIsDeleting: (value: boolean) => set({ isDeleting: value }),
    setIsUpdating: (value: boolean) => set({ isUpdating: value }),
    setIsLoading: (value: boolean) => set({ isLoading: value }),
    setIsCreating: (value: boolean) => set({ isCreating: value }),
    setUsername: (value: string) => {
        set({ username: value});
        localStorage.setItem('username', JSON.stringify(value));
    },
}));


export default useStore;
