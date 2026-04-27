import { useState } from 'react'
import './App.css'

function App() {
  const [carro, setCarro] = useState('BMW')

 function trocarCarro(){
    setCarro('Mustang')
  }
  return (
    <>
      <h1>{carro}</h1>
      <button onClick={trocarCarro}>Trocar Carro</button>
    </>
  )
}

export default App
