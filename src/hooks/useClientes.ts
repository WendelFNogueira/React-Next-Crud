import Cliente from "../core/Cliente";
import ColecaoCliente from "../firebase/db/ColecaoCliente";
import ClienteRepositorio from './../core/ClienteRepositorio';
import { useEffect, useState } from "react";
import useTabelaOuForm from "./useTabelaOuForm";
export default function useClientes() {
    const repo: ClienteRepositorio = new ColecaoCliente();

    const [ cliente, setCliente ] = useState<Cliente>(Cliente.vazio());
    const [ clientes, setClientes ] = useState<Cliente[]>([]);
    const { 
        formularioVisivel, 
        tabelaVisivel, 
        exibirTabela,
        exibirFormulario, 
    } = useTabelaOuForm();


    useEffect(obterTodos, []);

    function obterTodos() {
        repo.obterTodos().then( clientes => {
        setClientes(clientes)
        exibirTabela()
        } );
    }

    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente);
        exibirFormulario();
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente);
        obterTodos()
    }

    function novoCliente() {
        setCliente(Cliente.vazio());
        exibirFormulario();
    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente);
        obterTodos();
    }

    return {
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        exibirTabela,
        formularioVisivel,
        tabelaVisivel,
        cliente,
        clientes,
    }

}