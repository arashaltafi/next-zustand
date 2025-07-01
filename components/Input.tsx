import React from 'react';

interface InputProps {
    id: string;
    label: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, value, onChange }) => (
    <div className="mb-4">
        <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-300"
        >
            {label}
        </label>
        <input
            id={id}
            type={type || "text"}
            value={value}
            onChange={onChange}
            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
);

export default Input;