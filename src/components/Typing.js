import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Typing() {
    const { getInputData } = useContext(UserContext)

    return (
        <div>{getInputData ? <h1>{getInputData}</h1> : <h1>Hechnima yoq</h1>}</div>
    )
}

export default Typing