import React, { use, useState, type Dispatch } from 'react';
import type { Iplayer } from '../../types/PlayerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedPlayers from './SelectedPlayers';

interface PlayersProps {
    playersPromise: Promise<Iplayer[]>;
    coin: number;
    setCoin: Dispatch<SetStateAction<number>>; 
        
}

const Players = ({ playersPromise, coin, setCoin }:PlayersProps) => {
    const players = use(playersPromise);
    // console.log(players);

const [buttonType, setButtonType] = useState<"available" | "selected">("available");
// console.log(buttonType);
const [selectedPlayers, setSelectedPlayers] = useState<Iplayer[]>([]);

const handleUpdateBtnType = (type: "available" | "selected")=> {
    setButtonType(type);
};

    return (
        <div className='container mx-auto'>
          <div className='flex justify-between gap-4 mb-2'>
            <h2 className='font-bold text-xl'>
                {buttonType === "available"
                 ? "Available Players"
                 : "Selected Players"}
                 </h2>
        <div>
            <button 
             onClick={() => handleUpdateBtnType("available")} 
             className={`btn ${buttonType === "available" ? "btn-success" : " "} rounded-r-none`}>Available</button>

            <button 
             onClick={() => handleUpdateBtnType("selected")} 
             className={`btn ${buttonType === "selected" ? "btn-success" : " "} 
             rounded-r-none`}>Selected</button>
         </div>
        </div>

        {buttonType === "available" ? (
            <AvailablePlayers 
            players={players} 
            coin={coin} 
            setCoin={setCoin}
            selectedPlayers={selectedPlayers} 
            setSelectedPlayers={setSelectedPlayers} 
            />
        ) : (
           <SelectedPlayers 
           selectedPlayers={SelectedPlayers}
           setSelectedPlayers={setSelectedPlayers}
           />
        )}
        </div>
    );
};

export default Players;