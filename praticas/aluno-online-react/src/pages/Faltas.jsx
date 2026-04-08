import "./Faltas.css"

function Faltas() {
    return (
        <>
      <header className="titulo">
        <h1>Minhas Faltas</h1>
        <img src="avatar.svg" alt="Ícone do avatar" />
      </header>

      <header className="subtitulo">
        <h2>Histórico de Faltas por Semestre</h2>
      </header>

<section className="card">

        <h3>2026.1</h3>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Total de Faltas</th>
              <th>% de Presença</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>BI e Data Warehounsing</td>
              <td>0</td>
              <td>100%</td>
            </tr>

            <tr>
              <td>Construção de Frontend</td>
              <td>0</td>
              <td>100%</td>
            </tr>

            <tr>
              <td>Manutenção de Software e Devops</td>
              <td>0</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
        </section>

        <section className="card">  

        <h3>2025.2</h3>
        <table>
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Total de Faltas</th>
              <th>% de Presença</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Construção de Backend</td>
              <td>27</td>
              <td>87.5%</td>
            </tr>

            <tr>
              <td>Estrutura de Dados</td>
              <td>9</td>
              <td>85%</td>
            </tr>

            <tr>
              <td>Gerenciamento de Projetos</td>
              <td>10.5</td>
              <td>82.5%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Faltas;