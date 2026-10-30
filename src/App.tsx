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
    },
    {
        id: "cc68db12-2859-433b-88be-7d25313b9fd8",
        largura: 40.0,
        altura: 20.0,
        profundidade: 10.0,
        peso: 3.14
    },
]

function App() {
  const [pacotes, setPacotes] = useState(data);

  function excluirPacote(pacote : PacoteType){

    /*
    const novoPacotes = [];
    for(let i=0; i<pacotes; i++){
      if ()
    }
    */

    const novoPacotes = pacotes.filter(p => p!==pacote);
    setPacotes(novoPacotes);
  }

  return (
    <>
      <h2>Pacotes</h2>
      <div className="pacotes">
        {pacotes.map(
          p => 
            <div key={p.id}>
              <Pacote pacote={p}/>
              <button onClick={() => excluirPacote(p)}>Excluir</button>
            </div>
        )}
        
      </div>
    </>
  )
}

export default App
