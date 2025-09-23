import React from 'react';

const SelectPlayers = ({pl,removepl}) => {
   
    return (
        <div className='max-w-[1150px] mx-auto'>
    {pl.map(player => (
      <div key={player.name} className='border-2 rounded-2xl p-5 mb-2 border-gray-300 flex justify-between items-center'>
        <div className='flex justify-center items-center gap-3'>
          <img className='h-[100px] w-[100px] rounded-xl' src={player.image} alt="" />
          <div>
            <h1 className='text-2xl font-bold'>{player.name}</h1>
            <p className='text-[18px] opacity-70'>{player.role}</p>
          </div>
        </div>
        <div>
          <img onClick={()=>removepl(player)} src="https://i.ibb.co.com/p6fpFmYk/Frame-1.png" alt="" />
        </div>
      </div>
    ))}
  </div>
    );
};

export default SelectPlayers;