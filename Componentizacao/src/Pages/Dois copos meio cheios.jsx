
import React, { useState } from 'react'

const CheckNumber = () => {
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleCheck = () => {
    const num = parseInt(number)
    if (num % 2 === 0 && num > 0) {
      setMessage('O número é par e positivo.')
    } else {
      setMessage('O número não é par e positivo.')
    }
  }

  return (
    <div>
      <h1>Dois Copos Meio Cheios</h1>
      <label>
        Insira um número:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </label>
      <button onClick={handleCheck}>Verificar</button>
      <p>{message}</p>
    </div>
  )
}

export default CheckNumber
