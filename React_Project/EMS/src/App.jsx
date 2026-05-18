import React from 'react'
import Navbar from './component/navbar'
import Button from './component/button'
import Section1 from './component/section1'


const App = () => {
  return (
    <div className='h-screen w-screen'>
      <div>
        <Navbar />
        <Section1 />
        <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800 transition' text='Explore the Collection' />
      </div>
    </div>
  )
}

export default App