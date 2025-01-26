import React from 'react'
import banner from '../../assets/banner.jpg'
import play from '../../assets/play.jpeg'
import apples from '../../assets/apples.png'
const bannerStyle={
  backgroundImage: `url(${banner})`,
  backgroundPosition: "center",
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat",
  width:"100%",
  height:"100%"
};
const Sell1 = () => {
  return (
    <div className='container my-14'>
      <div style={bannerStyle} className='sm:min-h-[400px] sm:felx sm:justify-end sm:items-center rounded-xl'>
        <div>
        <div className='space-y-6 max-w-xl mx-auto'>
          <h1 className='text-2xl text center sm:text-4xl font-semibold text-center'>Download the App</h1>
          <p data-aos="fade up" data-aos-delay="300" className='text-center sm:px-20'>Download the App on your devices to begin your journey filled with freshness{" "}</p>
        </div>

        <div className='flex justify-center items-center gap-4'>
        <a>
   <img src={play} alt="Play Store" className='max-w-[150px] sm:max-w-[150px] md:max-w-[150px]'/>
</a>
<a>
  <img src={apples} alt="Apples" className='max-w-[150px] sm:max-w-[150px] md:max-w-[150px]' />
</a>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Sell1
