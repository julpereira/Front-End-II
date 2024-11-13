'use client'
import { useState } from "react";

export default function State(){
    const [conteudo, setConteudo] = useState('Bom dia!')
    const [name, setName] = useState('')
    const controlarParagrafo = () =>{
        setConteudo('Boa tarde!')
        console.log('conteudo:' +conteudo)
    }

    const controlarInput = (evento) =>{
        console.log(evento.target.value);
        setName('')
        console.log('name:' +name)
        
    }
    return (
        <div>
            <p>{conteudo}</p>
            <button onClick={controlarParagrafo}>Mudar</button>
            <p>Nome: {name}</p>
            <input type="text" onChange={controlarInput} />
        </div>
    )
}