import React from 'react'
import card1 from '../assets/card1.jfif'

const Card = ({ children }) => {
  return (
    <div className='w-70 mt-15'>
        <div className='h-90'>
            <img src={card1} alt='Card Image' className='w-full h-full object-contain' />
        </div>
        <div className='ml-5'>
           {children}
        </div>
    </div>
  )
}

export default Card