
import React, { useState } from 'react'

const NumberSign = () => {
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleCheck = () => {
    const num = parseFloat(number)
    if (num > 0) {
      setMessage('O número é positivo.')
    } else if (num < 0) {
      setMessage('O número é negativo.')
    } else {
      setMessage('O número é nulo.')
    }
  };

  return (
    <div>
      <h1>Copo Meio Cheio</h1>
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

export default NumberSign
