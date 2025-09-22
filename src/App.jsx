
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
   const [balance,setBalance]=useState(3000000)
   const [pl,setpl]=useState([])

 
  return (
    <>
  
   <NavbarFile balance={balance}></NavbarFile>
   <div className='max-w-[1150px] mx-auto flex justify-between items-center mb-4'>
     <h1 className='font-bold text-2xl'>Available Players</h1>
     <div>
      <button onClick={()=>settoggle(true)} className={`btn rounded-l-2xl ${toggle===true?" bg-[#e7fe29]":""} font-bold  border-r-0`}>Available</button>
      <button onClick={()=>settoggle(false)} className={`btn rounded-r-2xl ${toggle===false?" bg-[#e7fe29]":""} font-bold `}>Selected(0)</button>
     </div>
   </div>
   {
     toggle===true?<Suspense  fallback={<span className="loading loading-bars loading-xl "></span>}>
    <AvilablePlayers pl={pl} setpl={setpl} balance={balance} setBalance={setBalance} playerData={playerData}></AvilablePlayers></Suspense>: <SelectPlayers pl={pl}></SelectPlayers>
   }
   
  
    </>
  )
}

export default App
