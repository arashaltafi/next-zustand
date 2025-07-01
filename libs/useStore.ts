import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface FormData {
  name: string;
  age: string;
  email: string;
}

interface State {
  count: number;
  form: FormData;
  increment: () => void;
  decrement: () => void;
  resetCounter: () => void;
  setForm: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      count: 0,
      form: { name: '', age: '', email: '' },
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      resetCounter: () => set({ count: 0 }),
      setForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
      resetForm: () => set({ form: { name: '', age: '', email: '' } }),
    }),
    { name: 'app-storage' }
  )
);
