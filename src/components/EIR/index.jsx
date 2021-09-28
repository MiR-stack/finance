import React, { useState } from 'react'
import Filter from '../filter'
import Bank from './Bank.jsx/bank'
import Business from './businessEIR'
import { VscSettings } from 'react-icons/vsc'
import './eir.css'

export default function EIR() {

    const [component, setComponent] = useState('business')
    const [filter, setFilter] = useState('collection')
    const [period, setPeriod] = useState('annual')
    const [FILTER, setFILTER] = useState(false)

    function handleComponent() {
        if (component === 'business') return <Business />
        if (component === 'bank') return <Bank component={filter} formula={period} />

    }
    function handleFilter(name) {
        setFilter(name)

    }
    function handlePeriod(name) {
        setPeriod(name)
    }
    function handleComponents(name) {
        setComponent(name)
        console.log(component)
    }
    const handleFILTER = () => {
        setFILTER(!FILTER)
    }

    return (
        <React.Fragment>
            <div className={`dumb ${FILTER ? 'dumb-open' : ''}`} onClick={() => { setFILTER(false) }}></div>
            <div className='eir'>
                <div className="main">
                    <form action="">
                        <div className="filter-icon"><VscSettings onClick={() => { handleFILTER() }} /></div>
                        {handleComponent()}
                    </form>
                </div>
                <Filter prop={{ handleFilter, handlePeriod, period, filter, handleFILTER, FILTER, handleComponents, component }} />
            </div>
        </React.Fragment>
    )
}
