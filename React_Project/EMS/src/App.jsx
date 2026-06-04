import React from 'react'
import Navbar from './component/navbar'
import Section1 from './component/section1'
import Offer from './component/offer'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Section4 from './component/section4'
import Section5 from './component/section5'
import Footer from './component/footer'


const App = () => {
  return (
    <div className='h-screen w-screen'>
      <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </div>
  )
}

export default App