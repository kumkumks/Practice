import React, { useState } from 'react'

const items=[
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Grapes' },
    { id: 5, name: 'Mango' },
]

const Filter = () => {

    const [searchTerm, setSearchTerm] = useState('')
   
    return (
        <div className=''>
            <div className='max-w-md mx-auto mt-10'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='border-2 border-gray-300 rounded-lg px-4 py-2 w-full'
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p>{ searchTerm === '' ? 'No search term entered' :
                    items.filter(i=>i.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).map((t)=>{
                        return <p>{t.name}</p>
                    })
                    }</p>
            </div>
        </div>
    )
}

export default Filter