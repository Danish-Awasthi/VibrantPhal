import React from 'react'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Buy from './components/Where to Buy/Buy'
import Sell1 from'./components/Sell/Sell1'
import Footer from'./components/footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  React.useEffect(()=>{
   AOS.init({
    duration:500,
    delay:100,
    easing:"ease-in-cubic"
   })
  })
  return (
    <main className="overflow-x-hidden">
      <Hero></Hero>
      <Services></Services>
      <Buy></Buy>
      <Sell1></Sell1>
      <Footer></Footer>
    </main>
  )
}

export default App
