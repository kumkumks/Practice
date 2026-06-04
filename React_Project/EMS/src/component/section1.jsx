import React from 'react'
import Button from './button'
import Lady from '../assets/lady.png'

const Section1 = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex items-center justify-center relative h-[80vh] mt-3'>
                <div className='mt-19'>
                    <p className='text-[30px] font-bold text-red-300  font-bold opacity-0 animate-fadeIn delay-300 mb-[-85px]'>Power Meets Purpose</p>
                    <h1 className='text-[220px] z-0 font-bold  font-bold opacity-0 animate-fadeIn delay-200 mb-0'>VELV&nbsp;&nbsp;&nbsp;ORN</h1>
                    <div className='w-100 mt-[-39px]'>
                        <p className='text-[13px] text-red-300 font-bold bottom-0 font-bold opacity-0 animate-fadeIn delay-100'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, vel commodi perspiciatis reprehenderit atque accusamus fugit. Quos unde assumenda sequi aut esse porro, minus si.
                        </p>
                        <Button className='bg-black text-white px-4.5 py-2.5 hover:bg-gray-800 transition mt-8 opacity-0 animate-fadeIn delay-100' text='Explore the Collection' />
                    </div>
                </div>
                <img src={Lady} alt='Lady' className='object-cover absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 opacity-0 animate-slideUp delay-200' />
            </div>
        </div>
    )
}

export default Section1