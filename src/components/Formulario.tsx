import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    alterado?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario( props: FormularioProps ) {

    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '');
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div className="">
            { id ? (
                <Entrada 
                    somenteLeitura
                    texto="Código" 
                    tipo="number" 
                    valor={id}
                    className="mb-5"
                />
            ) : false }
            <Entrada 
                texto="Nome" 
                valor={nome}
                onChange={setNome}
                className="mb-5"
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                onChange={setIdade}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="cyan" className="mr-2" onClick={ () => props.alterado?.(new Cliente(nome, +idade, id))}>
                    { id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao cor="rose" onClick={ props.cancelado }>
                    Cancelar
                </Botao>
            </div>
        </div>
    );
}