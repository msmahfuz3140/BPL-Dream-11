import React, { use } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';

const Players = ({ playersPromiss }) => {
    const players = use(playersPromiss)
    
    return (
        <div>
            <AvailablePlayers players={players}></AvailablePlayers>
        </div>
    );
};

export default Players;