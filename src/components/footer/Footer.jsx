import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] pt-8 pb-8 text-white'>
      <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white'>
          <div className='space-y-6 '>
          <h1 className='text-4xl font-bold'>Orange Mint</h1>
          <p className='text-sm'>OrangeMint is a dynamic and customer-centric marketplace dedicated to delivering the freshest, healthiest, and most flavorful fruits, vegetables, and groceries right to your doorstep. Our mission is to revolutionize the grocery shopping experience by connecting consumers with local, high-quality products that are both affordable and sustainable</p></div>
          <div className='space-y-6'>
            <h1 className='text-4xl font-bold' >Quick Links</h1>
            <div className='grid grid-cols-2 gap-3'>
            <div>
              <ul className='space-y-2'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Search Fruits</a></li>
                <li><a href='#'>Privacy Policy</a></li>
              </ul>
            </div>
            </div>
          </div>
          <div className='space-y-6'>
          <h1 className='text-4xl font-bold'>Follow Us</h1>
          <div>
            <p>+1 987 6543221</p>
            <p >Industrial Area,Chandigarh</p>
          </div>
          <div className='flex items-center gap-3'>
          <div><FaFacebook className='text-3xl'/></div>
          <div><FaInstagramSquare className='text-3xl' /></div>
          <div><FaTelegramPlane className='text-3xl' /></div>
          <div> <FaGoogle className='text-3xl'/></div>
          </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
