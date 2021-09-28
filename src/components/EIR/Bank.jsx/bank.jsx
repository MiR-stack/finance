import React, { useState } from 'react'
import Collection from './collectionBasis'
import { VscSettings } from 'react-icons/vsc'


export default function Bank({ component, formula }) {


    const [data, setData] = useState({
        interest: '',
        loan: '',
        period: '',
        compensating: ''
    })
    const { interest, loan, period, compensating } = data

    function handleInput(e) {
        if (Number(e.target.value) | e.target.value === '') {
            setData({ ...data, [e.target.name]: Number(e.target.value) })
        }
    }

    const [warn, setWarn] = useState(false)

    const [EIR, setEIR] = useState(0)


    function handleResult(e) {
        e.preventDefault()

        let Interest = loan * (interest / 100)
        let Compensating = loan * (compensating / 100)
        let PI = Interest / period

        if (component === 'collection') {
            if (formula === 'annual') {
                if (interest && loan) {
                    let result = ((interest / 100) / loan) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }
            if (formula === 'semiAnnual') {
                if (interest && loan && period) {
                    let result = (Math.pow((1 + (((interest / 100)) / period)), period) - 1) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }

        }


        if (component === 'discount') {
            if (formula === 'annual') {
                if (interest && loan) {
                    let result = (Interest / (loan - Interest)) * 100
                    setEIR(result.toFixed(2))
                } else { setWarn(true) }

            }

            if (formula === 'semiAnnual') {
                if (interest && loan && period) {
                    let result = (Math.pow((1 + (PI / (loan - PI))), period) - 1) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }
        }


        if (component === 'compensating') {
            if (formula === 'annual') {
                if (interest && loan && compensating) {
                    let result = (Interest / (loan - Compensating)) * 100
                    setEIR(result.toFixed(2))
                } else { setWarn(true) }
            }

            if (formula === 'semiAnnual') {
                if (interest && loan && period && compensating) {
                    let result = (Math.pow(1 + PI / (loan - Compensating), period) - 1) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }
        }



        if (component === 'DC') {
            if (formula === 'annual') {
                if (interest && compensating && loan) {
                    let result = (Interest / (loan - Interest - Compensating)) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }
            if (formula === 'semiAnnual') {
                if (interest && compensating && loan && period) {
                    let result = (Math.pow(1 + PI / (loan - Compensating - Interest), period) - 1) * 100
                    setEIR(result.toFixed(2))
                } else {
                    setWarn(true)
                }
            }
        }


    }
    function handleReset(e) {
        e.preventDefault()
        setWarn(false)
        setData({
            interest: '',
            loan: '',
            period: '',
            compensating: ''
        })
        setEIR(0)
    }

    return (
        <>


            <Collection handleInput={handleInput} compensating={compensating} interest={interest} loan={loan} period={period} warning={warn} component={component} formula={formula} />
            <div className="buttons">
                <div className="btn-group">
                    <button onClick={(e) => { handleResult(e) }}>result</button>
                    <button onClick={(e) => { handleReset(e) }}> reset</button>
                </div>
                <p>EIR : {EIR}%</p>
                <p>see deatails</p>
            </div>
        </>
    )
}
