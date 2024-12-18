'use client';
import { useEffect, useState } from "react";

export default function Efeitos(){
    const [cont, setCont] = useState(0);
    const [cont2, setCont2] = useState(0);

    useEffect(() => {
        console.log('Renderizou')
    },[cont])
    return(
        <div>
            <h1>Efeitos Colaterais/Use Effect</h1>
            <button onClick={() => (setCont(cont + 1))}>Adicionar</button>
            <p>Renderizações cont 1: {cont}</p>
            <button onClick={() => (setCont2(cont2 + 1))}>Adicionar</button>
            <p>Renderizações cont 2: {cont2}</p>
        </div>
    )
}