import React from 'react'
import Searchbar from '../Searchbar'

const Navbar = () => {
    return (
        <nav className='bg-white py-3 px-6 md:px-8 flex items-center justify-between border-b border-hmash'>
            <div><img data-testid="logo" className='h-12 w-16' src='/home-24-logo.svg' alt='home 24 logo'/></div>
            <Searchbar data-testid="searchbar" />
        </nav>
    )
}

export default Navbar