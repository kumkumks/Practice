import React from 'react'
import Button from './button'

const Offer = () => {
    return (
        <div className='flex items-center w-full h-auto  justify-between'>
            <div>
                <h1 className='text-[30px] font-semibold'>Exclusive Offer</h1>
            </div>
            <div className='w-[500px]'>
                <p className='text-[20px] text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, error?luptate.</p>
                <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800 transition mt-8' text='Explore the Collection' />
            </div>
        </div>
    )
}

export default Offer