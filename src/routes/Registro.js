import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Registro() {
    const [registroData, setRegistroData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)

    const addItem = (e) => {
        e.preventDefault();
        if(error) return;

        const tempData = [...registroData];
        tempData.push(textInput)
        setRegistroData(tempData)
        setTextInput("")
    }

    useEffect(() => {
        if (textInput.length > 10) setError(true)
        else setError(false)
    }, [textInput])

    const removeItem = (index) => {
        let newData = [...registroData]
        newData.splice(index,1)
        setRegistroData(newData)
    }

    const editItem = (index) => {
        if(error) return;

        let newData = [...registroData]
        newData[index] = textInput;

        setRegistroData(newData)
    }

    return (
        <div>
            <h1>Registro</h1>
            <Link to="/">Vamos al Home</Link>

            <form onSubmit={addItem}>
                <label>Texto:
                    <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
                </label>
                <input type="submit" value="Agregar" />
            </form>
            {error ? <span style={{ color: "red" }}>Muchos caracteres!</span> : null}
            {
                registroData.map((item, index) => {
                    return (
                        <li key={index}>{item} <button onClick={() => removeItem(index)}>Borrar</button> <button onClick={() => editItem(index)}>Modificar</button></li>
                    )
                })
            }
        </div>
    )
}

export default Registro
