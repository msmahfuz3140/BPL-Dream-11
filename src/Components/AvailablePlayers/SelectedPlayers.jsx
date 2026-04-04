import React from 'react';

import { toast } from 'react-toastify';
import SelectedCard from '../UI/SelectedCard';

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
    // console.log(selectedPlayers, "selected players");
    const handleDeleteSelectedPlayers = (player) => {
        // console.log(player);
        const filterdPlayers = selectedPlayers.filter(selectedPlayer => selectedPlayer.name !== player.name);
        setSelectedPlayers(filterdPlayers);
        setCoin(coin + player.price);
        toast.error(`${player.name} is removed from selected players`, { autoClose: 2000 });

    }
    return (
        <div>
            <div className='space-y-5'>

                {selectedPlayers.length === 0 ?
                    // <div className='text-center text-gray-500 py-10'>
                    //     <h2>No players selected</h2>
                    //     <h3>Go to Available Players and select some!</h3>
                    // </div> 

                    <div className="flex flex-col items-center justify-center text-center py-16 px-4">

                        {/* Empty Icon */}
                        <div className="bg-gray-100 p-6 rounded-full mb-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-14 h-14 sm:w-16 sm:h-16 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7h18M5 7l1 13h12l1-13M10 11v6M14 11v6M9 7V4h6v3"
                                />
                            </svg>
                        </div>

                        {/* Text */}
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-700">
                            No Players Selected
                        </h2>

                        <p className="text-gray-500 mt-2 max-w-md text-sm sm:text-base">
                            You haven't selected any players yet.
                            Go to the <span className="font-semibold text-black">Available Players</span> section and build your squad.
                        </p>

                    </div>
                    :

                    selectedPlayers.map((player, ind) => {
                        return (
                            // <div key={ind} className='flex justify-between items-center gap-5 p-5 rounded-2xl border'>
                            //     <div className='flex items-center gap-3'>
                            //         <img 
                            //         src={player.image} 
                            //         alt={player.name} 
                            //         className='w-30 h-30 rounded-2xl'
                            //         />
                            //         <div className='space-y-1'>
                            //             <h2 className='flex font-bold text-2xl items-center gap-2'><FaUser /> {player.name}</h2>
                            //             <h4 className='flex items-center gap-2 font-semibold text-gray-500'><FaFlag /> {player.country}</h4>
                            //             <h4 className='font-semibold text-gray-500'>{player.type}</h4>
                            //         </div>
                            //     </div>
                            //     <button className='btn btn-error btn-soft rounded-3xl text-2xl'><MdDelete /></button>
                            // </div>

                            <SelectedCard key={ind} player={player} handleDeleteSelectedPlayers={handleDeleteSelectedPlayers} />
                        );
                    })
                }
            </div>
        </div>
    );
};

export default SelectedPlayers;