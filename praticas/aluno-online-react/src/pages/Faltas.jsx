import Main from "../components/Main";
import Tabela from "../components/Tabela";


function Faltas() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Main
                titulo="Minhas Faltas"
                subtitulo="Histórico de Faltas por Semestre"
            >


                <Tabela
                    titulo="2026.1"
                    colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
                    dados={[
                        ["BI e Data Warehousing", "0", "100%"],
                        ["Construção de Frontend", "0", "100%"],
                        ["Manutenção de Software e Devops", "0", "100%"]
                    ]}
                />


                <Tabela
                    titulo="2025.2"
                    colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
                    dados={[
                ["Construção de Backend", "27", "87.5%"],
                ["Estrutura de Dados", "9", "85%"],
                ["Gerenciamento de Projetos", "10.5", "82.5%"]
              ]}
                />

                <Tabela
                    titulo="2025.1"
                    colunas={["Disciplina", "Total de Faltas", "% de Presença"]}
                />
            </Main>
        </div>
    );
}

export default Faltas;