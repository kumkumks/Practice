import React from 'react'
import Lady from '../assets/lady.png'

const Section1 = () => {
    return (
        <div className='flex items-center justify-center relative h-[80vh]'>
            <h1 className='text-[220px] font-bold  font-bold opacity-0 animate-fadeIn delay-100'>VELV&nbsp;&nbsp;&nbsp;ORN</h1>
            <img src={Lady} alt='Lady' className='object-cover absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bottom-0 opacity-0 animate-slideUp delay-100' />
        </div>
    )
}

export default Section1