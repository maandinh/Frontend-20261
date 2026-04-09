import "./Faltas.css";

function Faltas() {

  const semestres = [
    {
      titulo: "2026.1",
      disciplinas: [
        { nome: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
        { nome: "Construção de Frontend", faltas: 0, presenca: "100%" },
        { nome: "Manutenção de Software e DevOps", faltas: 0, presenca: "100%" }
      ]
    },
    {
      titulo: "2025.2",
      disciplinas: [
        { nome: "Construção de Backend", faltas: 27, presenca: "87.5%" },
        { nome: "Estrutura de Dados", faltas: 9, presenca: "85%" },
        { nome: "Gerenciamento de Projetos", faltas: 10.5, presenca: "82.5%" }
      ]
    }
  ];

  return (
    <div className="faltas">

      <section className="subtitulo">
        <h2>Histórico de Faltas por Semestre</h2>
      </section>

      {semestres.map((semestre, index) => (
        <section className="card" key={index}>
          <h3>{semestre.titulo}</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>Total de Faltas</th>
                <th>% de Presença</th>
              </tr>
            </thead>

            <tbody>
              {semestre.disciplinas.map((disc, i) => (
                <tr key={i}>
                  <td>{disc.nome}</td>
                  <td>{disc.faltas}</td>
                  <td>{disc.presenca}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

export default Faltas;