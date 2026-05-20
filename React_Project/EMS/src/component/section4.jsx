import React from 'react'
import Offer from './offer'
import Card from './card'
import Button from './button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Section4 = () => {
    return (
        <div className='container mx-auto h-screen w-full mt-12'>
            <Offer />
            <Card>
                <div className='flex items-center'>
                    <div>
                        <h1 className=' text-gray-600 text-[17px] font-semibold '>New Arrivals</h1>
                        <span className='text-gray-600 text-lg  font-semibold'>$30.00</span>
                    </div>
                    <Button className='bg-white text-black px-4 py-2 rounded-md hover:bg-gray-500' icon={<FontAwesomeIcon icon={faPlus} />} />
                </div>
            </Card>
        </div>
    )
}

export default Section4