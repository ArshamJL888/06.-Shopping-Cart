import './Navbar.css'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <ul className='navbar'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Discounts</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Basket</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </>
    )
}
