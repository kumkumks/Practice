import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Modal = ({ isOpen, setIsOpen }) => { 
    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4 p-3'>
            <button
                onClick={toggleModal}
                className='bg-indigo-600 text-white px-4 py-2 rounded-lg'
            >
                {isOpen ? 'Hide Modal' : 'Show Modal'}
            </button>

            {isOpen ? (
                <div
                    className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'
                    onClick={handleBackdropClick}
                >
                    <div
                        className='w-90 h-80 bg-white text-black rounded-lg p-6 relative'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            onClick={toggleModal}
                            className='absolute top-2 right-2 text-gray-500 cursor-pointer'
                        />
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Modal Title</h2>
                            <p className='text-gray-700 mb-6'>This is a simple modal component.</p>
                            <button
                                onClick={toggleModal}
                                className='bg-red-500 text-white px-4 py-2 rounded-lg'>
                                Close Modal
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Modal