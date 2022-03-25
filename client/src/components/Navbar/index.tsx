import React from 'react'
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.header}>
            <strong>home24</strong>
            <input placeholder='Search' />
        </div>
    )
}

export default Navbar