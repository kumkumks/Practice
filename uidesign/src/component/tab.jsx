import React, { useState } from 'react'

const tab_data = [{
    id: 1,
    name: 'Home',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas accusamus cumque, quisquam, voluptatum voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptate voluptatum'
},
{
    id: 2,
    name: 'Contact',
    content: 'Contact content goes here'
},
{
    id: 3,
    name: 'About Us',
    content: 'About Us content goes here'
},
{
    id: 4,
    name: 'Help',
    content: 'Help content goes here'
},];

const Tab = () => {

    const [ActiveTab, setActiveTab] = useState(null);

    const handleActiveTab = (id) => {
        setActiveTab(id);
        console.log(id);
    }

    return (
        <div className='w-full max-w-2xl mx-auto p-4'>
            {/* Tab bar: horizontal scroll on small screens */}
            <div className='flex flex-nowrap items-center gap-2 overflow-x-auto min-w-0 mb-4'>
                {tab_data.map((e) => (
                    <div
                        key={e.id}
                        className={`shrink-0 bg-amber-50 text-center text-black px-4 py-2 rounded-2xl cursor-pointer transition duration-150 whitespace-nowrap 
                            ${ActiveTab === e.id ? 'bg-amber-300 font-semibold' : 'hover:bg-amber-100'}`}
                        onClick={() => handleActiveTab(e.id)}
                    >
                        <p>{e.name}</p>
                    </div>
                ))}
            </div>
            {/* Content panel: adapts width, margin, and font */}
            <div className='w-full bg-amber-50 text-center text-black px-4 py-4 rounded-2xl shadow-md min-h-[80px]'>
                {ActiveTab ? tab_data.find((e) => e.id === ActiveTab)?.content : 'Please select a tab'}
            </div>
        </div>
    )
}

export default Tab