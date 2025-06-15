"use client";

import { useState } from "react";
import UserForm from "@/components/UserForm";
import { User, useUserStore } from "@/libs/useUserStore";

export default function UserList() {
    const users = useUserStore((s) => s.users);
    const deleteUser = useUserStore((s) => s.deleteUser);

    const [editUser, setEditUser] = useState<User | undefined>();

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Users ({users.length})</h2>
            <UserForm editUser={editUser} onDone={() => setEditUser(undefined)} />

            {users.length === 0 ? (
                <p>No users yet.</p>
            ) : (
                <ul className="space-y-2">
                    {users.map((u) => (
                        <li key={u.id} className="flex items-center justify-between border p-2 rounded">
                            <div>
                                <p className="font-medium">{u.name}</p>
                                <p className="text-sm text-gray-600">{u.email}</p>
                            </div>
                            <div className="space-x-2">
                                <button onClick={() => setEditUser(u)} className="text-yellow-500">Edit</button>
                                <button onClick={() => deleteUser(u.id)} className="text-red-500">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}