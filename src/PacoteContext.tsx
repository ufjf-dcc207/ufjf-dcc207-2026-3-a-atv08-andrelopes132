import React, { createContext, useReducer, type ReactNode } from "react";
import type { PacoteType } from "./types";
import type { AcaoPacote } from "./pacoteReducer";
import pacoteReducer from "./pacoteReducer";

export const PacotesContext = createContext<Array<PacoteType>>([]);
export const PacotesDispacherContext = createContext<React.Dispatch<AcaoPacote>|null>(null);

type PacoteProviderProps = {
    children : ReactNode;
}

const data: Array<PacoteType> = [
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

export function PacoteProvider({children} : PacoteProviderProps){
    const [pacotes, dispacher] = useReducer(pacoteReducer, data);
    return (
        <>
            <PacotesContext value={pacotes}>
                  <PacotesDispacherContext value={dispacher}>
                    {children}
                  </PacotesDispacherContext>
                </PacotesContext>
        </>
    )
}
