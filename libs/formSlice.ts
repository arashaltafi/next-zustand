import { StateCreator } from 'zustand';

export interface FormData {
    name: string;
    age: string;
    email: string;
}

interface FormSlice {
    form: FormData;
    setForm: (data: Partial<FormData>) => void;
    resetForm: () => void;
}

export const createFormSlice: StateCreator<
    FormSlice,
    [],
    [],
    FormSlice
> = (set) => ({
    form: { name: '', age: '', email: '' },
    setForm: (data) => set((state) => ({ form: { ...state.form, ...data } })),
    resetForm: () => set({ form: { name: '', age: '', email: '' } }),
});