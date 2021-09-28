import React, { useState } from 'react'

export default function Business() {
    const [data, setData] = useState({
        discount: '',
        dTime: '',
        fTime: ''
    })
    const [warning, setWarning] = useState(false)
    console.log(data)

    const { discount, dTime, fTime } = data




    function handleInput(e) {
        if (Number(e.target.value) | e.target.value === '') {
            setData({ ...data, [e.target.name]: Number(e.target.value) })
        }
    }

    const [tMistake, setTmistake] = useState(false)
    const [eir, setEIR] = useState(0)
    const [ktc, setKtc] = useState(0)

    function handleResult(e) {
        e.preventDefault()
        if (discount && dTime && fTime) {
            if (discount < dTime) {
                if (dTime < fTime) {
                    let m = (360 / (fTime - dTime))
                    let KTc = (discount / (100 - discount)) * m * 100
                    setKtc(KTc.toFixed(2))
                    let Eir = (Math.pow((1 + (KTc / 100) / m), m) - 1) * 100
                    setEIR(Eir.toFixed(2))
                } else {
                    setData({ ...data, fTime: '' })
                    setWarning(true)
                    setTmistake(true)
                }

            } else {
                setData({ ...data, dTime: '' })
                setWarning(true)
                setTmistake(true)
            }
        }else {
            setWarning(true)
        }
    }
    function handleReset(e) {
        e.preventDefault()
        setData({
            discount: '',
            dTime: '',
            fTime: ''
        })
        setWarning(false)
        setTmistake(false)
        setEIR(0)
    }

    const [select, setSelect] = useState('ktc')

    function handleSelect(e) {
        setSelect(e.target.value)
    }


    return (
        <>
            <div className='main-s'>
                <div className="title">
                    <label htmlFor="discount"  >discount </label>
                    <label htmlFor="dtime" > discount time </label>
                    <label htmlFor="ftime" >final time </label>
                </div>
                <div>
                    <p>:</p>
                    <p>:</p>
                    <p>:</p>
                </div>
                <div className="input">
                    <input className={warning ? discount ? '' : 'warn' : ''} type="text" name='discount' value={discount} placeholder='discount' onChange={(e) => { handleInput(e) }} required />
                    <input className={warning ? dTime ? '' : 'warn' : ''} type="text" name='dTime' value={dTime} placeholder={tMistake ? 'must be grater then discount' : 'credit period'} onChange={(e) => { handleInput(e) }} required />
                    <input className={warning ? fTime ? '' : 'warn' : ''} type="text" name='fTime' value={fTime} placeholder={tMistake ? 'must be gratr then credit period' : 'discount period'} onChange={(e) => { handleInput(e) }} required />
                </div>
            </div>
            <div className="buttons">
                <div className="btn-group">
                    <button onClick={(e) => { handleResult(e) }}>result</button>
                    <button onClick={(e) => { handleReset(e) }}> reset</button>
                </div>
                <p><select onChange={(e) => { handleSelect(e) }} >
                    <option value="ktc">Ktc</option>
                    <option value="eir">EIR</option>
                </select>: {select === 'ktc'?ktc:eir}%</p>
                <p>see deatails</p>
            </div>
        </>
    )
}
