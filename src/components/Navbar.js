import React from 'react'
import globe from "../images/globe.png"

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={globe} alt="" className='nav--logo' />
            <p className='nav--title'>my travel journal.</p>
        </nav>
    )
}

export default Navbar