import "./Pacote.css"
import type { PacoteType } from "./types"

type PacoteProps = {
    pacote : PacoteType;
    acaoExcluir : (id : string)=>void;
}

export default function Pacote({pacote, acaoExcluir} : PacoteProps){
    return (
        <>
            <div className="pacote">

                <dt>id</dt>                     <dd title={pacote.id}>{pacote.id.substring(0,8)}</dd>

                <dt>Largura (cm)</dt>           <dd>{pacote.largura}</dd>

                <dt>Altura (cm)</dt>            <dd>{pacote.altura}</dd>

                <dt>Cubagem (m³)</dt>           <dd>
                                                    {
                                                        400 * 
                                                        pacote.largura/100 *
                                                        pacote.altura/100 *
                                                        pacote.profundidade/100
                                                    }
                                                </dd>

                <dt>Profundidade (cm)</dt>      <dd>{pacote.profundidade}</dd>

                <dt>Peso (kg)</dt>              <dd>{pacote.peso}</dd>
                
                <dd>
                    <button onClick={() => acaoExcluir(pacote.id)}>Excluir</button>
                </dd>

            </div>
        </>
    )
}