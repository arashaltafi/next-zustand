import { StateCreator } from 'zustand';

interface CounterSlice {
    count: number;
    increment: () => void;
    decrement: () => void;
    resetCounter: () => void;
}

export const createCounterSlice: StateCreator<
    CounterSlice,
    [],
    [],
    CounterSlice
> = (set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    resetCounter: () => set({ count: 0 }),
});