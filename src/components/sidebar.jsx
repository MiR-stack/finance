import React from 'react'
import { FaChevronDown,FaTimes } from 'react-icons/fa'

export default function Sidebar({ value }) {
    const { component, handleComponents, sidebar,handleSidebar } = value
    return (
        <div className={`sidebar ${sidebar ? 'sidebar-open' : ''}`}>
            <div className="top">
                <h2>unicorn</h2>
                <FaTimes onClick={()=>{handleSidebar()}} />
            </div>
            <h3 onClick={() => { handleComponents('intro') }}>introduction</h3>
            <div className="dropdown-container">
                <div className='name' onClick={() => { handleComponents({ document: 'eir' }) }}>
                    <h3>components</h3>
                    <FaChevronDown />
                </div>
                <ul className={component.document ? 'dropdown-open' : 'dropdown-menu'}>
                    <li onClick={() => { handleComponents({ document: 'eir' }) }}>Eir</li>
                    <li onClick={() => { handleComponents({ document: 'eir' }) }}>Eir</li>
                    <li>Eir</li>
                    <li>Eir</li>
                    <li>Eir</li>
                </ul>
            </div>
            <h3>about</h3>
        </div>
    )
}
