import React from 'react'

const Searchbar = () => {
    return (
        <div className='relative'>
            <input
                type="text"
                className='block text-sm py-3 pl-2 pr-5 rounded border border-hmborder hover:border-hmred focus:outline-none cursor-text'
                placeholder='Find products...'
                
            />

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-hmred absolute top-3 right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

        </div>
    )
}

export default Searchbar