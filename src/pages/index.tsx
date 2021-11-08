import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    novoCliente, 
    selecionarCliente, 
    excluirCliente, 
    salvarCliente, 
    exibirTabela,
    tabelaVisivel,
    clientes, 
    cliente 
  } = useClientes();
  
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-tr from-green-700 to-green-400
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { tabelaVisivel ? (
          <>
          <div className="flex justify-end">
            <Botao cor="sky" className="mb-4" onClick={ novoCliente }>Cadastrar</Botao>
          </div>
          <Tabela 
            clientes={clientes} 
            clienteSelecionado={ selecionarCliente } 
            clienteExcluido={ excluirCliente }
          />
        </>
        ) : (
          <Formulario 
            cliente={cliente}
            cancelado={ exibirTabela }
            alterado={ salvarCliente }
          />
        )}
      </Layout>
    </div>
  )
}
