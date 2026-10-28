import { useState } from 'react'
import './App.css'
import Pacote from './Pacote'
import type { PacoteType } from './types'

const data:Array<PacoteType> = [
    {
        id: "f6a76c5e-3b13-45c0-9e61-3979c945acc0",
        largura: 20.0,
        altura: 30.0,
        profundidade: 40.0,
        peso: 2.34
    }
]

function App() {
  return (
    <>
      <h2>Pacotes</h2>
      <div className="pacotes">
        <Pacote pacote={data[0]}/>
      </div>
    </>
  )
}

export default App
