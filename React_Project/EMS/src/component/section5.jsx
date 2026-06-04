import React from 'react'
import Button from './button'

const Section5 = () => {
    return (
        <div className='bg-red-400 h-90 w-screen mt-10 flex items-center justify-center'>
            <div className='w-[500px] text-center'>
                <h1 className='text-4xl font-bold text-white'>Empower Every Mood With Style</h1>
                <p className='text-white text-lg mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis incidunt porro ullam officia quod nesciunt reiciendis sed culpa voluptas officiis.</p>
                <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800 transition mt-8' text='Shop Now' />
            </div>
        </div>
    )
}

export default Section5