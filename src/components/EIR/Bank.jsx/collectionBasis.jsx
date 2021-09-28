import React from 'react'

export default function Collection({ handleInput, interest, loan, period, warning, component, formula,compensating }) {

    var check = formula === 'semiAnnual'
    console.log(warning)
    var CB = component === 'compensating' || component === 'DC'
    return (
        <div className='main-s'>
            <div className="title">
                <label htmlFor="totalIterest"> total interest</label>
                <label htmlFor="loan">amount of loan</label>
                {check && <label htmlFor="period">number of period</label>}
                {CB && <label htmlFor="period">compensating balance</label>}
            </div>
            <div>
                <p>:</p>
                <p>:</p>
                {check && <p>:</p>}
                {CB && <p>:</p>}
            </div>
            <div className="input">
                <input className={warning ? interest ? '' : 'warn' : ''} type="text" name='interest' value={interest} placeholder='total interest' onChange={(e) => { handleInput(e) }} required />
                <input className={warning ? loan ? '' : 'warn' : ''} type="text" name='loan' value={loan} placeholder='amount of loan' onChange={(e) => { handleInput(e) }} required />
                {check && <input className={warning ? period ? '' : 'warn' : ''} type="text" name='period' value={period} placeholder='period' onChange={(e) => { handleInput(e) }} required />}
                {CB && <input className={warning ? compensating ? '' : 'warn' : ''} type="text" name='compensating' value={compensating} placeholder='compensating interest' onChange={(e) => { handleInput(e) }} required />}
            </div>
        </div>
    )
}
