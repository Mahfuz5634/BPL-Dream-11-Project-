
import { Suspense, useState } from 'react'
import './App.css'
import AvilablePlayers from './Component/AvilablePlayers'
import NavbarFile from './Component/NavbarFile'
import SelectPlayers from './Component/SelectPlayers'

const fetchPlayer = async ()=>{
   const res=await fetch('/players.json')
   return res.json();
}
 const playerData=fetchPlayer();
function App() {
   

   const [toggle,settoggle]=useState(true)
   const [balance,setBalance]=useState(8000000)
   const [pl,setpl]=useState([])

   const removepl =(p)=>{
     const fldata=pl.filter(fld=> fld.name!==p.name);
     setpl(fldata);
     setBalance(balance+p.price);
   }

 
  return (
    <>
  
   <NavbarFile balance={balance}></NavbarFile>
   <div className='max-w-[1150px] mx-auto flex justify-between items-center mb-4'>
     <h1 className='font-bold text-2xl'>{toggle===true?"Avialable players":`Selected Players(${pl.length}/6)`}</h1>
     <div>
      <button onClick={()=>settoggle(true)} className={`btn rounded-l-2xl ${toggle===true?" bg-[#e7fe29]":""} font-bold  border-r-0`}>Available</button>
      <button onClick={()=>settoggle(false)} className={`btn rounded-r-2xl ${toggle===false?" bg-[#e7fe29]":""} font-bold `}>Selected({pl.length})</button>
     </div>
   </div>
   {
     toggle===true?<Suspense  fallback={<span className="loading loading-bars loading-xl "></span>}>
    <AvilablePlayers pl={pl} setpl={setpl} balance={balance} setBalance={setBalance} playerData={playerData}></AvilablePlayers></Suspense>: <SelectPlayers removepl={removepl} pl={pl}></SelectPlayers>
   }
   
  
    </>
  )
}

export default App
