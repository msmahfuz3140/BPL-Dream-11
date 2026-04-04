import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../AvailablePlayers/SelectedPlayers';

const Players = ({ playersPromiss, setCoin, coin}) => {
    const players = use(playersPromiss);

    const [btnSelected, setBtnSelected] = useState("available");
    const [selectedPlayers, setSelectedPlayers] = useState([])
    // console.log(selectedPlayers,"selectd plyrs");
    
    
    return (
        <div>
            <div className='md:flex justify-between items-center gap-4 my-5'>
                {btnSelected === "available" ?<h2 className='text-2xl font-bold flex justify-center items-center'>Abailable Players: ({players.length})</h2>:<h2 className='text-2xl font-bold flex justify-center items-center'>Selected Players: ({selectedPlayers.length} / {players.length})</h2>}
                <div className='flex mt-5 justify-center items-center'>
                    <button
                    onClick={()=> setBtnSelected("available")}
                     className={`btn ${btnSelected === "available" ? "bg-[#85fe29]": "bg-white"} rounded-r-none rounded-l-xl`}>Available</button>
                    <button 
                    onClick={()=> setBtnSelected("selected")}
                    className={`btn ${btnSelected === "selected" ? "bg-[#85fe29]": "bg-white hover:bg-[#85fe2938]"} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
            {btnSelected === "available" ?
             <AvailablePlayers
              setCoin={setCoin} players={players} coin={coin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              ></AvailablePlayers>:
              <SelectedPlayers selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
              coin={coin}
              setCoin={setCoin}
              ></SelectedPlayers>}
        </div>
    );
};

export default Players;