import React from 'react';
import { FaFlag, FaUser } from 'react-icons/fa';

const Card = ({player}) => {
    return (
        <div
            key={player.id}
            className="card bg-base-100 border border-gray-200 shadow-sm p-4 rounded-2xl flex flex-col"
        >
            {/* প্লেয়ার ইমেজ (ইমেজের মতো রাউন্ডেড কর্নার এবং প্যাডিং বজায় রাখা হয়েছে) */}
            <figure className="rounded-xl overflow-hidden h-70 w-full">
                <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="flex-1 flex flex-col py-4 space-y-3">
                {/* নাম এবং ইউজার আইকন */}
                <div className="flex items-center gap-3">
                    <FaUser className="text-xl text-gray-600" />
                    <h2 className="text-xl font-bold text-black">{player.name}</h2>
                </div>

                {/* দেশ এবং রোল */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-gray-400">
                        <FaFlag />
                        <span className="font-medium text-gray-500">{player.country}</span>
                    </div>
                    <div className="bg-gray-100 px-4 py-1.5 rounded-lg text-sm font-medium text-gray-700">
                        {player.type}
                    </div>
                </div>

                <div className="divider my-0"></div>

                {/* রেটিং সেকশন */}
                <h3 className="font-bold text-black text-lg">Rating: {player.rating}</h3>

                {/* ব্যাটিং ও বোলিং স্টাইল (ইমেজের মতো লেআউট) */}
                <div className="flex justify-between items-center">
                    <p className="font-bold text-black">{player.batting_style}</p>
                    <p className="text-gray-500">{player.bowling_style}</p>
                </div>

                {/* প্রাইস এবং বাটন */}
                <div className="flex justify-between items-center pt-1">
                    <p className="font-bold text-black">Price: ${player.price}</p>
                    <button className="btn btn-outline btn-sm border-gray-300 hover:bg-[#E7FE29] hover:text-black hover:border-[#E7FE29] rounded-lg transition-all duration-300 capitalize px-4 font-bold">
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;