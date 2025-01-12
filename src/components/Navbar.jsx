import React from 'react'
import Logo from "../assets/Logo.png"
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
   <>
   
    <div className=' w-full border-[1px] bg-white shadow-custom lg:h-[80px] sm:h-[64px] flex border-b-[1px] border-b-[#DEDFE2] items-center justify-between mx-auto px-[60px] '>
    <div >
  <img src={Logo} loading='lazy' width={96} height={64} className=' '></img>
    </div>

    {/* right options */}

<div className='flex flex-row gap-7 items-center sm:opacity-0 lg:opacity-100  relative left-[405px]'>

<div class=" text-[#0F1629] text-[16px] font-semibold text-left">
Crypto Taxes
</div>

<div class=" text-[#0F1629] text-[16px] font-semibold text-left">
Free Tools
</div>

<div class=" text-[#0F1629] text-[16px] font-semibold text-left">
Resource Center
</div>



<button className=' w-[136px] h-[40px] p-[8px] bg-custom-gradient rounded-[8px] text-white'> Get Started</button>

</div>

<MdOutlineMenu className='text-[background: #0B182F] sm:opacity-100 lg:opacity-0 lg:w-0 lg:h-0  w-[27.42px] h-[27.42px]'/>

    </div>
   </>
  )
}

export default Navbar
