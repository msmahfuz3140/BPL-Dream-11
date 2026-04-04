import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const SelectedCard = ({ player, handleDeleteSelectedPlayers }) => {
    return (
        <div
            
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300"
        >
            {/* Left Section */}
            <div className="flex items-center gap-4 w-full">

                {/* Image */}
                <img
                    src={player.image}
                    alt={player.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl object-cover"
                />

                {/* Info */}
                <div className="space-y-1">
                    <h2 className="flex items-center gap-2 font-bold text-lg sm:text-xl lg:text-2xl text-gray-900">
                        <FaUser className="text-gray-600" />
                        {player.name}
                    </h2>

                    <h4 className="flex items-center gap-2 font-medium text-gray-500 text-sm sm:text-base">
                        <FaFlag />
                        {player.country}
                    </h4>

                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold">
                        {player.type}
                    </span>
                </div>
            </div>

            {/* Delete Button */}
            <button
                onClick={() => handleDeleteSelectedPlayers(player)}
                className="btn btn-error btn-soft rounded-full text-lg sm:text-xl w-full sm:w-auto hover:scale-105 transition-transform duration-300"
            >
                <MdDelete />
            </button>
        </div>
    );
};

export default SelectedCard;