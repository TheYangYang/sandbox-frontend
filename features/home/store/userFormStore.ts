import { create } from 'zustand';
import type { User, UserFormState } from '../../../types/user.types';

export const useUserFormStore = create<UserFormState>((set) => ({
  user: { name: '', email: '' },
  setUser: (user) => set({ user }),
}));
