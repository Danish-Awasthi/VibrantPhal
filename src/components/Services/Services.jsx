import React from 'react'
import fruits from'../../assets/fruits.png'
import veggies from'../../assets/veggies.jpeg'
import juices from'../../assets/juices.jpeg'
const ServicesData=[{
  id:1,
  image:fruits,
  title:"Fresh Fruits",
  subtitle:"Nature's Bounty, Fresh and Juicy – Straight from Farm to You!",
  aosDelay:"300"
},
{
  id:2,
  image:veggies,
  title:"Fresh Vegetables",
  subtitle:"Harvested Daily, Packed with Goodness – Fresh Vegetables for a Healthier You!",
  aosDelay:"500"
},
{
  id:1,
  image:juices,
  title:"Fresh Juices",
  subtitle:"Pure, Refreshing, and Naturally Sweet – Squeeze the Best of Nature in Every Sip!",
  aosDelay:"700"
}
]
const Services = () => {
  return (
    <div className='containerb my-16 space-y-4'>
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <h1 data-aos="fade-up" className='text-3xl font-bold text-[var(--color-primaryDark)]'>
          Fresh and<span className='text-[var(--color-primary)]'> Tasty Fruits and Vegetables</span>{" "}
        </h1>
        <p data-aos="fade-up" className='text-sm opacity-50'>
             Our Different varities of all fruits and juices directly from the mother nature to you 
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8'>
        {
          ServicesData.map(({id,image,title,subtitle,aosDelay})=>(
                <div key={id} data-aos="fade up" data-aos-delay={aosDelay} className='p-4 text-center space-y-6'>
                  <img src={image} alt='' className='max-w-[200px] mx-auto hover:scale-110 duration-300 img-shadow2'/>
                  <div className='space-y-2'>
                    <h1 className='text-2xl font-bold text-[var(--color-primary)]'>{title}</h1>
                    <p className='text-dark'>{subtitle}</p>
                 </div>
                </div>   
          ))}
      </div>
    </div>
  )
}

export default Services;
