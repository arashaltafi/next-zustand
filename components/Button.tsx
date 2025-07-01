import React from 'react';

interface ButtonProps {
    color?: "red" | "blue" | "green" | "yellow";
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ color, onClick, children }) => (
    <button
        onClick={onClick}
        style={{
            backgroundColor: color
        }}
        className={`px-4 py-2 text-white rounded ${color == 'yellow' ? "bg-yellow-600 hover:bg-yellow-700" : color == 'red' ? "bg-red-600 hover:bg-red-700" : color == 'green' ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
    >
        {children}
    </button>
);

export default Button;