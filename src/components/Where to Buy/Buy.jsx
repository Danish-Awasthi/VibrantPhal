import React from 'react'
import Worldmap from '../../assets/Worldmap.jpg'
const Buy = () => {
  return (
      <div className="container my-36">
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center'>
          <div className='space-y-8'>
            <h1 data-aos="fade-up" className='text-4xl font-bold text-dark font-serif'>Where to buy our Products??</h1>
          <div className='flex items-center gap-4'>
            <input type="text" placeholder="City" className='w-full border-2 border-black lg:w-[120px]'/>
            <input type="text" placeholder="Pincode" className='border-2 border-black w-full'/>
          </div>
          <button data-aos="fade-up" className='w-full bg-[var(--color-secondary)] border-2 border-black px-4 py-2 rounded-lg'>Search</button>
        </div>
        <div>
          
        </div>
        <div>
        <img data-aos="fade-up" src={Worldmap} alt="" className='w-full h-full object-fill mx-auto' />
        </div>
        </div>
      </div>
  )
}

export default Buy
