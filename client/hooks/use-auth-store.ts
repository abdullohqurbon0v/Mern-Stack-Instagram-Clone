import { create } from 'zustand';

interface AuthState {
  username: string;
  email: string;
  password: string;
  setUsername: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  clearFields: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  username: '',
  email: '',
  password: '',
  setUsername: (username) => set({ username }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  clearFields: () => set({
    username: '',
    password: '',
    email: ""
  })
}));

export default useAuthStore;
