"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface User {
    id: string;
    name: string;
    email: string;
}

interface UserState {
    users: User[];
    addUser: (u: Omit<User, "id">) => void;
    updateUser: (u: User) => void;
    deleteUser: (id: string) => void;
    reset: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            users: [],
            addUser: (u) =>
                set((state) => ({
                    users: [...state.users, { ...u, id: crypto.randomUUID() }],
                })),
            updateUser: (u) =>
                set((state) => ({
                    users: state.users.map((x) => (x.id === u.id ? u : x)),
                })),
            deleteUser: (id) => set((state) => ({
                users: state.users.filter((x) => x.id !== id),
            })),
            reset: () => set({ users: [] }),
        }),
        {
            name: "user-store",
            storage: createJSONStorage(() => localStorage),
        }
    )
);