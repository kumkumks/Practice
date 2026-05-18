import React from 'react'
import Navbar from  './component/navbar'
import Button from './component/button'


const App = () => {
  return (
    <div className='h-screen w-screen bg-gray-100 flex items-center justify-center'>
      {/* <Navbar /> */}
       <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800' text='Explore the Collection'/>
    </div>
  )
}

export default App