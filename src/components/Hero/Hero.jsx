import React from 'react'
import orange from '../../assets/orange.webp'
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  const[sidebar,setSidebar]=React.useState(false);
  return (
    <main className='md:px-12 md:py-6 bg-[var(--color-primaryDark)]'>
      <section className="relative min-h-[650px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] w-full md:rounded-xl shadow-md">
        <div className="container">
          <Navbar sidebar={sidebar} setSidebar={setSidebar}/>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols3 place-items-center
          min-h-[650px]">
            <div className='text-white mt-[100px] md:my-0 p-4 space-y-4'> 
              <h1 data-aos="fade-up" className='text-5xl font-bold uppercase text-shadow'>A Healthy Fruit</h1>
              <p data-aos="fade-up"className='text-sm'>Welcome to VibrantPhal, your one-stop destination for farm-fresh groceries and everyday essentials. Discover a wide range of organic produce, pantry staples, and premium-quality products at unbeatable prices. We prioritize freshness, sustainability, and customer satisfaction to bring you the best shopping experience. Shop with us today and make every meal a healthy and delicious delight!</p>
              <button data-aos="fade-up"className='border-2 border-white px-4 py-2 rounded-lg'>Shop Now</button>
            </div>
            <div>
              <img data-aos="fade-up"src={orange} alt='Not found' className='relative z-10-w-[300px] img-shadow'></img>
            </div>
            <div className='md:hidden'></div>
          </div>
        </div>
        <h1 data-aos="fade-up" className='text-center text-[80px] sm:text-[120px] md:text-[150px] xl:text-[180px] text-white uppercase font-bold absolute bottom-0 w-full z-0 text-shadow'>NATURAL</h1>
      </section>
    </main>
  )
}

export default Hero;
