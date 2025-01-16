import React from "react";

interface BackButtonProps {
    onClick: () => void;
    text: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, text }) => {
    return (
        <button
            onClick={onClick}
            className="bg-black text-yellow-600 font-semibold border border-yellow-600 py-2 px-4 rounded hover:bg-yellow-600 hover:bg-opacity-95 hover:text-black"
        >
            {text}
        </button>
    );
};