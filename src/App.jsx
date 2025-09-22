import './App.css'
import navimg from './assets/logo.png'
import dollerImg from './assets/Currency.png'

function App() {

  return (
    <>
  <div className="navbar bg-base-100 max-w-[1150px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
      <img  className='w-[50px] h-[50px] ' src={navimg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
       <span className='mr-1'>6000000</span>
       <span  className='mr-1'>Coin</span>
       <img src={dollerImg} alt="" />
  </div>
</div>
    </>
  )
}

export default App
