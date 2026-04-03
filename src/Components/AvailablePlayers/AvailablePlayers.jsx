import React from 'react';
import { FaFlag, FaStar, FaUser } from 'react-icons/fa';
import Card from '../UI/Card';

const AvailablePlayers = ({ players }) => {
    console.log(players);
    return (
        // <div className="card bg-base-100 w-96 shadow-sm">
        //     <figure>
        //         <img
        //             src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        //             alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title"><FaUser /> Card Title</h2>
        //         <div className='flex justify-between items-center'>
        //             <div className='flex justify-center items-center gap-2'>
        //                 <FaFlag />
        //                 <p>Country</p>
        //             </div>
        //             <button className='btn btn-soft rounded-xl'>Rounder</button>

        //         </div>
        //         <div className="divider"></div>
        //         <h2 className='font-bold'>Rating</h2>
        //         <div className='flex justify-between items-center font-bold'>
        //             <p>batting style</p>
        //             <p>bowling style</p>
        //         </div>

        //         <div className="card-actions justify-between items-center">
        //             <p className='font-bold'>Price: $120000</p>
        //             <button className="btn">Choose Player</button>
        //         </div>
        //     </div>
        // </div>

        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
        //     {players.map(player => (
        //         <div key={player.id} className="card bg-base-100 border border-gray-200 shadow-sm rounded-2xl flex flex-col overflow-hidden">

        //             {/* প্লেয়ার ইমেজ */}
        //             <figure className="h-60 w-full overflow-hidden">
        //                 <img
        //                     src={player.image || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
        //                     alt={player.name}
        //                     className="w-full h-full object-cover"
        //                 />
        //             </figure>

        //             <div className="flex-1 flex flex-col justify-between p-4 space-y-4">

        //                 {/* নাম এবং ইউজার আইকন */}
        //                 <div className="flex items-center gap-3">
        //                     <FaUser className="text-xl text-gray-700" />
        //                     <h2 className="text-xl font-bold text-gray-800">{player.name}</h2>
        //                 </div>

        //                 {/* দেশ এবং রোল */}
        //                 <div className="flex justify-between items-center">
        //                     <div className="flex items-center gap-2 text-gray-500">
        //                         <FaFlag />
        //                         <span className="font-medium">{player.country}</span>
        //                     </div>
        //                     <button className="btn btn-soft rounded-xl">{player.type}</button>
        //                 </div>

        //                 <div className="divider my-1"></div>

        //                 {/* রেটিং সেকশন */}
        //                 <div className='flex items-center gap-2'>
        //                     <h3 className="font-bold text-gray-800">Rating:  {player.rating}</h3>
        //                     <FaStar />
        //                 </div>

        //                 {/* ব্যাটিং ও বোলিং স্টাইল */}
        //                 <div className="flex justify-between items-center">
        //                     <p className="font-bold text-gray-800">{player.batting_style}</p>
        //                     <p className="text-gray-500">{player.bowling_style}</p>
        //                 </div>

        //                 {/* প্রাইস এবং বাটন */}
        //                 <div className="flex justify-between items-center pt-2">
        //                     <p className="font-bold text-gray-800 text-lg">Price: ${player.price}</p>
        //                     <button className="btn btn-outline btn-sm hover:bg-yellow-400 hover:text-black hover:border-yellow-400 rounded-lg transition-all duration-300">
        //                         Choose Player
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     ))}
        // </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
            {players.map((player) => (
                <Card player={player} key={player.id}></Card>
            ))}
        </div>



    );
};

export default AvailablePlayers;