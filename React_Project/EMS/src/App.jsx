import React from 'react'
import Navbar from './component/navbar'
import Section1 from './component/section1'
import Offer from './component/offer'
import Section2 from './component/section2'
import Section3 from './component/section3'
import Section4 from './component/section4'


const App = () => {
  return (
    <div className='h-screen w-screen'>
      <div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  )
}

export default App