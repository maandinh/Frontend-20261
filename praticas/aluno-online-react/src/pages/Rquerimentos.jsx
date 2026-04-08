import Tabela from "../components/Tabela";
import "./Requerimentos.css"

function Requerimentos() {
  const dados = [
    { nome: "Revisão de Menção", data: "15/12/2025", status: "Indeferido" },
    { nome: "Dispensa de Disciplina", data: "12/06/2025", status: "Indeferido" },
    { nome: "Trancamento de Matrícula", data: "05/01/2024", status: "Deferido" },
    { nome: "Mudança de Turno", data: "10/10/2023", status: "Deferido" },
    { nome: "Renovação de Matrícula", data: "20/02/2023", status: "Deferido" }
  ];

  const colunas = [
    "Tipo de Requerimento",
    "Data de Solicitação",
    "Situação"
  ];

  return (
    <>
      <header className="titulo">
        <h1>Meus Requerimentos</h1>
        <img src="avatar.svg" alt="Ícone do avatar" />
      </header>

      <header className="subtitulo">
        <h2>Faça solicitações online para a secretaria</h2>
      </header>

      <section className="card">
        <Tabela colunas={colunas} dados={dados} />
      </section>
    </>
  );
}

export default Requerimentos;