import React from 'react'

const Input = () => {
  return (
    <div className='flex justify-center w-screen'>
        <input className='bg-white text-black p-1.5'
        type='text'
        placeholder='Enter task'
        />
        <button className='bg-amber-900 text-white p-1.5 ms-2.5 rounded-sm w-17'>Add</button>
    </div>
  )
}

export default Input