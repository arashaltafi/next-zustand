import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createCounterSlice } from './counterSlice';
import { createFormSlice } from './formSlice';
import { logger } from './logger';

type StoreSlice = ReturnType<typeof createCounterSlice> &
  ReturnType<typeof createFormSlice>;

export const useStore = create<StoreSlice>()(
  persist(
    logger((...a) => ({
      ...createCounterSlice(...a),
      ...createFormSlice(...a),
    })),
    { name: 'app-storage' }
  )
);