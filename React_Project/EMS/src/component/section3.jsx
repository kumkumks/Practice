import React from 'react'
import section3 from '../assets/jisoo.jpg'
import Button from './button'

const Section3 = () => {
    return (
        <div className=' relative h-screen w-screen mt-20'>
            <img src={section3} alt='Section 3' className='object-contain z-0 h-full w-screen' />
            <div className='absolute z-3 top-4/12 left-8/12 w-max transform -translate-x-1/2 -translate-y-1/2 h-80'>
                <h1 className='text-white text-[40px] font-bold'>Discover the Latest Trends</h1>
                <div className='w-96'>
                    <p className='text-white'>Lorem ipsum,Ad reiciendis numquam molestias inventore, fugiat ducimus quidem voluptatum laborum quisquam nam!</p>
                    <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800 transition mt-8' text='Explore the Collection' />
                </div>
            </div>
        </div>
    )
}

export default Section3