import React, { useState, type Dispatch, type SetStateAction } from 'react';
import type { Iplayer } from '../../types/PlayerType';
import { FaUser, FaGlobe } from 'react-icons/fa';
import { GiCricketBat } from 'react-icons/gi';
import { toast } from 'react-toastify';
import Players from './Players';

interface IplayerCardProps {
  player: Iplayer;
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: Iplayer[];
  setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const PlayerCard = ({
  player, 
  coin, 
  setCoin,
  selectedPlayers, 
  setSelectedPlayers 
}: IplayerCardProps) => {
const [isSelected, setIsSelected] = useState(false);
// console.log(isSelected, setIsSelected, "isSelected, setIsSelected");

console.log(coin, setCoin, "from card");

const handleSelectPlayer = ()=> {
   setIsSelected(true);

  const newCoinPrice = coin - player.price;

if (newCoinPrice >= 0) {
  setCoin(newCoinPrice);
  toast.success(`${player.playerName} player purchased successfully`);
} else {
  toast.error("Coin is not enough to purchase");
}
// selected players logic
setSelectedPlayers([...selectedPlayers, player])

};

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={player.playerImg}
      alt="Shoes" />
  </figure>
  <div className="card-body space-y-3">
    <h2 className="card-title">
        <FaUser/>
      {player.playerName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
      <div className='flex justify-between gap-4'>
        <p className='font-semibold'>{player.origin}</p>
        <button className='btn'>{player.playerType}</button>
      </div>
      
    <div className="divider"/>

    <h2 className='font-bold text-2xl'>Rating</h2>
       <div className='flex justify-between gap-4'>
        <p className='font-semibold'>{player.battingStyle}</p>
        <button className='btn'>{player.bowlingStyle}</button>
      </div>
      
  
    <div className="card-actions justify-between items-center">
        <h2 className='font-bold text-2xl'>${player.price}</h2>
      <div className="btn">{isSelected === true ? "Selected" : "Choose Player"}</div>
    </div>

  <button 
     onClick={() => handleSelectPlayer()}
     className={`btn btn-primary rounded-xl px-5 shadow-md transition-all
     hover:scale-105`}

    //  disabled ={isSelected === true ? true : false}
        // disabled={isSelected ? true : false}
         disabled={isSelected}
     >
      {isSelected === true ? "Selected" : "Choose player"}

  </button>

  </div>
</div> 

        </div>
    );
};

export default PlayerCard;