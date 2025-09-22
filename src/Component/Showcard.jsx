import React, { useState } from 'react';
import userImg from '../assets/Group.png'
import flag from '../assets/report.png'

const Showcard = ({player,setBalance,balance,pl,setpl}) => {
    const[isSelected,setselect]= useState(false)
    return (
        <div>
            
            <div className="card h-[420px] w-[350px] bg-white shadow-md rounded-2xl overflow-hidden">
  {/* Player Image */}
  <figure className="h-[200px] w-full overflow-hidden">
    <img 
      src={player.image}
      alt={player.name}
      className="h-full w-full object-cover"
    />
  </figure>

  {/* Player Info */}
  <div className="p-4">
    {/* Name + User Avatar */}
    <div className="flex items-center">
      <img className="h-8 w-8 rounded-full mr-2" src={userImg} alt="User" />
      <h2 className="text-lg font-semibold">{player.name}</h2>
    </div>

    {/* Country + Role */}
    <div className="flex justify-between items-center mt-3 border-b pb-2 border-gray-200">
      <div className="flex items-center">
        <img className="h-5 w-5" src={flag} alt="Flag" />
        <span className="ml-2 text-sm text-gray-700">{player.country}</span>
      </div>
      <button className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-lg">
      {player.role}
      </button>
    </div>

    {/* Stats */}
    <div className="mt-3 space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-bold">Rating</span>
        <span>{player.rating}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="font-bold">Batting</span>
        <span>{player.battingStyle}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="font-bold">Bowling</span>
        <span>{player.bowlingStyle}</span>
      </div>
    </div>

    {/* Price + Button */}
    <div className="card-actions mt-4 flex justify-between items-center">
      <p className="text-sm">
        <span className="font-bold">Price:</span>${player.price}
      </p>
      <button disabled={isSelected} onClick={()=>{
        
         if (balance >= player.price) {
      setselect(true);
       setBalance(balance-player.price)
       const  npl=[...pl,player];
       setpl(npl);
    } else {
      alert("You don't have enough money");
    }
      }
       } className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
        {isSelected?"Selected":"Choose Player"}
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Showcard;