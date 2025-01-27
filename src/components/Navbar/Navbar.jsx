import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = ({sidebar,setSidebar}) => {
  return (
    <div className='absolute top-0 left-0 w-full py-2 text-white z-20'>
   <div className='container'>
       <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold uppercase'>Vibrant <span className='font-normal text-2xl'>Phal </span></h1>
       <ul className=' lg:flex hidden space-x-4 text-xl'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="Buy.jsx">Map</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
       </ul>
       <div onClick={()=>setSidebar(!sidebar)}>
        <div><GiHamburgerMenu className='text-5xl cursor-pointer'/></div>
       </div>
{/*        {sidebar && (
  <div
    className="absolute bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] z-[9999] p-4 rounded-md shadow-lg"
    style={{
      top: '100%', // Place the sidebar right below the hamburger icon
      left: '85.2%', // Align it to the left
    }}
  >
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="w-[1px] h-[70px] bg-white"></div>
      <div>
        <FaFacebook className="text-white text-4xl" />
      </div>
      <div className="w-[1px] h-[70px] bg-white"></div>
      <div>
        <FaInstagramSquare className="text-white text-4xl" />
      </div>
      <div className="w-[1px] h-[70px] bg-white"></div>
      <div>
        <FaSquareXTwitter className="text-white text-4xl" />
      </div>
    </div>
  </div>
)} */}
   </div>
   </div>
   </div>
  )
}
export default Navbar;
