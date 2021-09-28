import React from 'react'
import './nav.css'
import { FiMenu } from 'react-icons/fi'

export default function Navbar({ sidebar }) {
    return (
        <div className='navbar'>
            <div className="brand-name">
                <h2>unicorn</h2>
            </div>
            <div className="menubar">
                <ul>
                    <li>doc</li>
                    <li><button> how to use</button></li>
                </ul>
            </div>
            <div className="menu">
                <FiMenu onClick={() => { sidebar() }} />
            </div>
        </div>
    )
}
