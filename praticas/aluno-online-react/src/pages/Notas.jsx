import "./Notas.css"

function Notas() {
  const semestres = [
  {
    titulo: "2026.1",
    disciplinas: [
      { nome: "BI e Data Warehousing", a1: "", a2: "", a3: "", mencao: "SR" },
      { nome: "Construção de Frontend", a1: "", a2: "", a3: "", mencao: "SR" },
      { nome: "Manutenção de Software e Devops", a1: "", a2: "", a3: "", mencao: "SR" }
    ]
  },
  {
    titulo: "2025.2",
    disciplinas: [
      { nome: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "", mencao: "MM" },
      { nome: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "", mencao: "MM" },
      { nome: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "", mencao: "MS" }
    ]
  }
]; 
    return (
    <div className="notas"> 

      <header className="subtitulo">
        <h2>Histórico de Notas por Semestre</h2>
      </header>

      {semestres.map((semestre, index) => (
        <section className="card" key={index}>
          <h3>{semestre.titulo}</h3>

          <table>
            <thead>
              <tr>
                <th>Disciplina</th>
                <th>A1</th>
                <th>A2</th>
                <th>A3</th>
                <th>Menção</th>
              </tr>
            </thead>

            <tbody>
              {semestre.disciplinas.map((disc, i) => (
                <tr key={i}>
                  <td>{disc.nome}</td>
                  <td>{disc.a1}</td>
                  <td>{disc.a2}</td>
                  <td>{disc.a3}</td>
                  <td>{disc.mencao}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}

export default Notas;