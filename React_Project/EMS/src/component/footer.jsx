import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faThreads } from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 h-screen w-screen  grid grid-cols-4 p-3 gap-2'>
        <div className=' py-5 px-3'>
            <h5 className='text-2xl text-white font-bold'>VELVORN</h5>
            <FontAwesomeIcon icon={faFacebook} className='text-lg text-white' />
            <FontAwesomeIcon icon={faInstagram} className='text-lg text-white' />
            <FontAwesomeIcon icon={faThreads} className='text-lg text-white' />
        </div>
        <div className=' py-5 px-3'>
            <h5 className='p-2 text-xl text-white font-bold'>Shop</h5>
            <p className='p-2 text-white'>Delhi</p>
            <p className='p-2 text-white'>Mumbai</p>
            <p className='p-2 text-white'>Bangalore</p>
            <p className='p-2 text-white'>Chennai</p>
        </div>
        <div className='py-5 px-3'>
            <h5 className='p-2 text-xl text-white font-bold'>Help</h5>
            <p className='p-2 text-white'>Customer Support</p>
            <p className='p-2 text-white'>Returns & Exchanges</p>
            <p className='p-2 text-white'>Shipping Information</p>
            <p className='p-2 text-white'>Privacy Policy</p>
        </div>
        <div className='py-5 px-3'>
            <h5 className='p-2 text-xl text-white font-bold'>Be the first to know</h5>
            <p className='p-2 text-white'>Sign up for our newsletter</p>
            <p className='p-2 text-white'>Get the latest updates and offers</p>
        </div>
    </div>  
  )
}

export default Footer