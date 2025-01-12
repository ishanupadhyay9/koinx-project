import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Team from './components/Team';
import BitcoinInfo from './components/BitcoinInfo'
import Tokenomics from './components/Tokenomics'
function App() {
 

  return (
    <>
      <div className=' w-full mx-auto relative left-0 top-0 bg-[#EFF2F5] pb-7 overflow-x-clip'>
      <Navbar/>
        {/* maindiv */}
      <div className='flex sm:flex-col'>
 
   
   {/* leftdiv */}
<div className='relative left-[56px]' >
<BitcoinInfo/>
<Tokenomics/>
<Team/>
</div>
   {/* rightdiv */}
<div>

</div>


      </div>
        </div>
    </>
  )
}

export default App
