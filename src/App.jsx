
import { Suspense } from 'react'
import './App.css'
import AvilablePlayers from './Component/AvilablePlayers'
import NavbarFile from './Component/NavbarFile'
import SelectPlayers from './Component/SelectPlayers'

const fetchPlayer = async ()=>{
   const res=await fetch('/players.json')
   return res.json();
}

function App() {
  const playerData=fetchPlayer();
  return (
    <>
   <NavbarFile></NavbarFile>
   <Suspense fallback={<p>Loading....</p>}>
    <AvilablePlayers playerData={playerData}></AvilablePlayers></Suspense>
   <SelectPlayers></SelectPlayers>
    </>
  )
}

export default App
