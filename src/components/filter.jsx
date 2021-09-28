import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function Filter({ prop }) {

    const { handleFilter, filter, handlePeriod, period, handleComponents, component, handleFILTER, FILTER } = prop



    return (
        <div className={`filter ${FILTER ? 'filter-open' : ''}`}>
            <div className="close"><FaTimes onClick={() => { handleFILTER() }}  /> </div>
            <ul className='main'>
                <li onClick={() => { handleComponents('business') }}><h3 >business</h3></li>
                <li className="dropdown-menu" >
                    <div onClick={() => { handleComponents('bank') }}>
                        <h3>bank</h3>


                    </div>
                    <div className={`main-filter ${component === 'bank' ? 'dropdown-open' : 'dropdown-container'}`} >
                        <p>type</p>
                        <ul className="select">
                            <li><input type="checkbox" checked={filter === 'collection'} onChange={() => handleFilter('collection')} name="collection" id="collection" /> <label htmlFor="collection"> collection basis</label></li>
                            <li><input type="checkbox" checked={filter === 'discount'} onChange={() => handleFilter('discount')} name="discount" id="discount" /> <label htmlFor="discount"> discount basis</label></li>
                            <li><input type="checkbox" checked={filter === 'compensating'} onChange={() => handleFilter('compensating')} name="compensating" id="compensating" /> <label htmlFor="compensating"> compensating basis</label></li>
                            <li><input type="checkbox" checked={filter === 'DC'} name="DC" onChange={() => handleFilter('DC')} id="DC" /> <label htmlFor="DC"> discount compensating basis</label></li>
                        </ul>


                        <p>no of annual period</p>
                        <ul className='select'>
                            <li><input type="checkbox" checked={period === 'annual'} onChange={() => handlePeriod('annual')} name="annual" id="annual" /> <label htmlFor="annual"> annual </label></li>
                            <li><input type="checkbox" checked={period === 'semiAnnual'} onChange={() => handlePeriod('semiAnnual')} name="semiAnnual" id="semiAnnual" /> <label htmlFor="semiAnnual"> semi Annual </label></li>
                        </ul>
                    </div>
                </li>
                <li><h3>custom</h3></li>

            </ul>
        </div>
    )
}
