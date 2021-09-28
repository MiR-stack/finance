import React, { useState } from 'react'
import './index.css'
import Sidebar from './sidebar'
import Navbar from './navbar'
import EIR from './EIR/index'

export default function Index() {
    const [component, setComponent] = useState('document')
    const [sidebar, setSidebar] = useState(false)

    function handleComponents(name) {
        setComponent(name)
    }
    function handleSidebar() {
        setSidebar(!sidebar)
    }

    return (
        <>
            <div className={`dumb ${sidebar ? 'dumb-open' : ''}`} onClick={() => { setSidebar(false) }}></div>
            <Navbar sidebar={handleSidebar} />
            <div className='index'>
                <Sidebar value={{ component, handleComponents, sidebar, handleSidebar }} />
                <EIR />
            </div>
        </>

    )
}
