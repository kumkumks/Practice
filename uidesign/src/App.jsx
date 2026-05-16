import React, { useState } from 'react'
import Timer from './component/timer'
import { Routes, Route, Link } from 'react-router-dom'
import Input from './component/input'
import Charactercount from './component/charactercount'
import Accordion from './component/accordion'
import Tab from './component/tab'
import Notification from './component/notification'
import Filter from './component/filter'
import Modal from './modal'

const App = () => {

   const[isOpen,setIsOpen]=useState(true)

  return (
    <>
      <div className='flex justify-between p-7 bg-black'>
        <Link className='bg-blue-900 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/'>Home</Link>
        <Link className='bg-amber-900 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/timer'>Timer</Link>
        <Link className='bg-yellow-300 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/input'>Input</Link>
        <Link className='bg-red-500 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/character'>Character</Link>
        <Link className='bg-purple-500 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/accordion'>Accordion</Link>
        <Link className='bg-purple-500 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/tab'>Tab</Link>
        <Link className='bg-green-700 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/notification'>Notification</Link>
        <Link className='bg-indigo-500 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/filter'>Filter</Link>
         <Link className='bg-indigo-500 text-white font-medium px-3 py-2 rounded-2xl inline-block' to='/modal'>Modal</Link>
      </div>
      <Routes>
        <Route path='/timer' element={<Timer />} />
        <Route path='/input' element={<Input />} />
        <Route path='/character' element={<Charactercount />} /> 
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/tab' element={<Tab />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/modal' element={<Modal isOpen={isOpen} setIsOpen={setIsOpen} />} />
      </Routes>
    </>
  )
}

export default App