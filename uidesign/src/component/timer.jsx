import React, { useEffect, useReducer } from 'react'



const Timer = () => {

  const [count, dispatch] = useReducer((count, action) => {
    switch (action.type) {
      case 'increment':
        return count<10 ? count + 1 :count
      case 'decrement':
        return count>0 ? count - 1 :count
      default:
        return count
    }
  }, 0)


  return (
    <div className='flex h-48 m-8 w-64 flex-col items-center justify-center gap-2 rounded-lg bg-green-800 text-white'>
      <h1 className='text-6xl font-bold'>{count}</h1>
      <button 
      className='bg-purple-500 p-2 rounded-lg hover:bg-purple-400'
      onClick={() => {
        dispatch({ type: 'increment' })
      }}>
        Increment
      </button>
      <button 
      className='bg-red-500 p-2 rounded-lg hover:bg-red-400'
      onClick={() => {
        dispatch({ type: 'decrement' })
        }}>
        Decrement
      </button>
      {count>=10  && <p>Reached max count 10</p>}
      {count<=0  && <p>Reached it's limit 0</p>}
    </div>
  )
}

export default Timer