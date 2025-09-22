import React, {use} from 'react';
import Showcard from './Showcard';


const AvilablePlayers = ({playerData,setBalance,balance,pl,setpl}) => {


   const  players= use(playerData)

    return (
        
        <div className='max-w-[1150px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
           {
            players.map( player => <Showcard pl={pl} setpl={setpl} balance={balance} setBalance={setBalance} player={player}></Showcard> )
           }
         
        </div>
    );
};

export default AvilablePlayers;