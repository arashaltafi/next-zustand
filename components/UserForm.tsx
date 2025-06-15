"use client";

import { User, useUserStore } from "@/libs/useUserStore";
import { useState, useEffect } from "react";

interface Props {
    editUser?: User;
    onDone?: () => void;
}

export default function UserForm({ editUser, onDone }: Props) {
    const addUser = useUserStore((s) => s.addUser);
    const updateUser = useUserStore((s) => s.updateUser);

    const [name, setName] = useState(editUser?.name ?? "");
    const [email, setEmail] = useState(editUser?.email ?? "");

    useEffect(() => {
        if (editUser) {
            setName(editUser.name);
            setEmail(editUser.email);
        }
    }, [editUser]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editUser) {
            updateUser({ id: editUser.id, name, email });
        } else {
            addUser({ name, email });
        }
        setName("");
        setEmail("");
        onDone?.();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-2"
        >
            <div>
                <label>Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border p-2 rounded w-full text-black"
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border p-2 rounded w-full text-black"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                {editUser ? "Update" : "Add"} User
            </button>
        </form>
    );
}