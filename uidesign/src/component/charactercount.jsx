import React, { useEffect, useState } from 'react'

const Charactercount = () => {

  const[input,setInput]=useState('');

  return (
    <div className='w-screen flex justify-center h-70'>
        <div className='bg-purple-400 p-3.5 w-90 h-70'>
           <textarea 
        className='bg-white text-black border-white'
        type='text'
        value={input}
        placeholder='Type......'
        maxLength={20}
        onChange={(e)=>{setInput(e.target.value)}}
        />
        <p className='text-2xl font-bold mt-2.5'>{input.length}</p>
        <span className='text-2xl font-bold mt-2.5 inline'>{input}</span>
        </div> 
    </div>
  )
}

export default Charactercount