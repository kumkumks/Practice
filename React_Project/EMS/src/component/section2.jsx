import React from 'react'
import Offer from './offer'
import Card from './card'

const Section2 = () => {
  return (
    <div className='container mx-auto h-screen w-full mt-30'>
        <Offer />
        <Card>
            <h1 className=' text-gray-600 text-[17px] font-semibold '>New Arrivals</h1>
            <div className='flex items-center'>
              <span className='text-gray-600 text-lg  font-semibold'>$30.00</span>
              <span className='text-gray-600 ml-2 text-sm font-semibold line-through '>$50.00</span>
            </div>
        </Card>
    </div>
  )
}

export default Section2