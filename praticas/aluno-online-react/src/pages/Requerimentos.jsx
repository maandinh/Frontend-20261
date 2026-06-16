import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Main from "../components/Main";
import Tabela from "../components/Tabela";

import { listarRequerimentos } from "../services/requerimentoService";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);

  useEffect(() => {
    async function carregarDados() {
      try {
        const dados = await listarRequerimentos();

        setRequerimentos(dados);
      } catch (error) {
        console.error(error);
      }
    }

    carregarDados();
  }, []);

  return (
    <div className="flex h-screen bg-gray-50">
      <Main
        titulo="Meus Requerimentos"
        subtitulo="Faça solicitações online para a Secretaria"
      >
        <div className="flex justify-end">
          <Link
            to="/requerimentos/novo"
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            ➕ Novo Requerimento
          </Link>
        </div>

        <Tabela
          colunas={[
            "Tipo de Requerimento",
            "Data de Solicitação",
            "Situação",
          ]}
          dados={requerimentos.map((item) => [
            item.tipo,
            item.data,
            item.situacao,
          ])}
        />
      </Main>
    </div>
  );
}

export default Requerimentos;