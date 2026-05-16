import React, { useState } from 'react'

const Notification = () => {

  const [MessageActive, setMessageActive] = useState(false);

  const handleNotification = () => {
    setMessageActive(true);
        setTimeout(() => {
         setMessageActive(false);
    }, 1000) 
  }

  return (
    <div className=' h-screen'>
      <div className='flex justify-center'>
        <button
          onClick={()=>{ handleNotification() }}
          className='bg-green-900 text-white font-medium px-3 py-2 rounded-2xl inline-block hover:bg-green-700'
        >Show message</button>
      </div>
    {  MessageActive ?
    <div>

        <div className='flex justify-center'>
          <div className='flex p-3 rounded-2xl w-80 mt-10 bg-amber-700 text-white  justify-center'>
            <p>A new Message has arrived !</p>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex p-3 rounded-2xl w-80 mt-10 bg-red-700 text-white  justify-center'>
            <p>A new Message has arrived !</p>
          </div>
        </div>
      </div> : ''
      }

    </div>
  )
}

export default Notification