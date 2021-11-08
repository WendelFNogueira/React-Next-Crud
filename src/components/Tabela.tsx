import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from './Icones';

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (cliente: Cliente) => void; 
    clienteExcluido?: (cliente: Cliente) => void; 
}

export default function Tabela( props: TabelaProps ) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                { exibirAcoes ? <th className="p-4">Ações</th> : false }
            </tr>
        );
    }

    function renderData() {
        return props.clientes?.map( (cliente, i) => {
            return (
                <tr key={cliente.id}
                    className={` ${ i%2===0 ? 'bg-green-200' : 'bg-green-100' } `}
                >
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {exibirAcoes ? renderActions(cliente) : false}
                </tr>
            );
        } );
    }

    function renderActions(cliente: Cliente) {
        return (
            <td className="flex justify-center">
                { props.clienteSelecionado ? (
                    <button onClick={ _ => props.clienteSelecionado?.(cliente) } className={`
                        flex justify-center items-center
                        text-sky-500 rounded-full p-2 m-1
                        hover:bg-green-100
                    `}>
                        {IconeEdicao}
                    </button>
                ) : false }

                { props.clienteExcluido ? (
                    <button onClick={ _ => props.clienteExcluido?.(cliente) } className={`
                        flex justify-center items-center
                        text-red-500 rounded-full p-2 m-1
                        hover:bg-green-100
                    `}>
                        {IconeLixo}
                    </button>
                ) : false }
            </td>
        );
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-green-500 to-green-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>{renderData()}</tbody>
        </table>
    );
}