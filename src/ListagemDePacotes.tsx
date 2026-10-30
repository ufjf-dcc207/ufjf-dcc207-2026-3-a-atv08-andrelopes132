import { useState } from "react";
import "./ListagemDePacotes.css"
import Pacote from "./Pacote";
import type { PacoteType } from "./types"

type ListagemDePacotesProps = {
    pacotes:Array<PacoteType>;
    acaoExcluir : (id : string)=>void;
}

export default function ListagemDePacotes({pacotes, acaoExcluir} : ListagemDePacotesProps){
    
    const [ordenacao, setOrdenacao] = useState("altura");
    
    function mudaOrdenacao(evento : any){
        setOrdenacao(evento.target.value);
    }

    return (
        <div>
            <div>Ordenar por: 
                <select onChange={mudaOrdenacao}>
                    <option value="altura">Altura</option>
                    <option value="largura">Largura</option>
                    <option value="profundidade">Profundidade</option>
                    <option value="peso">Peso</option>
                </select>
            </div>
            <dl>
                {pacotes
                .sort((x,y) => y[ordenacao] - x[ordenacao])
                .map(p => (
                <Pacote pacote={p} key={p.id} acaoExcluir={acaoExcluir}/>))}
            </dl>
        </div>
    )
}