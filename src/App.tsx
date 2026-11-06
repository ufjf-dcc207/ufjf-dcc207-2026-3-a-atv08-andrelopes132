//import { useReducer } from 'react'
import './App.css'
// import Pacote from './Pacote'
//import type { PacoteType } from './types'
import ListagemDePacotes from './ListagemDePacotes'
//import pacoteReducer from './pacoteReducer'
import { PacoteProvider } from './PacoteContext'



function App() {

  

  return (
    <PacoteProvider>
        <>
          <h2>Pacotes</h2>
            <ListagemDePacotes/>
        </>
      </PacoteProvider>
  )
}

export default App
