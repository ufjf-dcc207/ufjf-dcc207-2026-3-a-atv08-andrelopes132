import { useState } from "react";
import "./ListagemDePacotes.css"
import Pacote from "./Pacote";
import type { PacoteType } from "./types"
import type { AcaoPacoteExcluir } from "./pacoteReducer";

type ListagemDePacotesProps = {
    pacotes:Array<PacoteType>;
    dispacher : React.ActionDispatch<[action: AcaoPacoteExcluir]>;
}

export default function ListagemDePacotes({pacotes, dispacher} : ListagemDePacotesProps){
    
    const [ordenacao, setOrdenacao] = useState<"altura" | "largura" | "profundidade" | "peso">("altura");   
    
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
                <Pacote pacote={p} key={p.id} dispacher={dispacher}/>))}
            </dl>
        </div>
    )
}