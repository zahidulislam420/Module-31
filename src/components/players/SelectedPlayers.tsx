import React, { type Dispatch, type SetStateAction} from 'react';
import type { Iplayer } from '../../types/PlayerType';
import PlayerCard from './PlayerCard';

interface ISelectedPlayersProps {
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

interface IsSelectedPlayersProps {
    selectedPlayers: Iplayer[];
    setSelectedPlayers: Dispatch<SetStateAction<Iplayer[]>>;
}

const SelectedPlayers = ({
    selectedPlayers,
    setSelectedPlayers,
}: ISelectedPlayersProps) => {

    console.log(selectedPlayers, "from selected players component");
    return (
    <div className='grid grid-cols-3 gap-7 mt-6'>
       {
        selectedPlayers.map((player) => {
            return <PlayerCard player={player}/>;
        
    })}
</div>
  );
};
export default SelectedPlayers;