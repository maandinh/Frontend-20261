import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas() {
    const colunas = [
        "Disciplina",
        "A1",
        "A2",
        "A3",
        "Menção",
    ];
    const notas = [
        ["BI e Data Warehousing", "", "", "", "SR"],
        ["Construção de Frontend", "", "", "", "SR"],
        ["Devops", "", "", "", "SR"]
    ]
  return (
    <>
      <Sidebar />
      <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
            <Tabela titulo="2026.1" />
            <Tabela titulo="2025.2" />
            <Tabela titulo="2025.1" />
      </Main>
    </>
  );
}


export default Notas;
