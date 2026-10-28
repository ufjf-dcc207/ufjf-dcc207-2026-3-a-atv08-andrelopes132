import { useState } from 'react'
import './App.css'
import Pacote from './Pacote'

function App() {
  return (
    <>
      <h2>Pacotes</h2>
      <div className="pacotes">
        <Pacote/>
      </div>
    </>
  )
}

export default App
