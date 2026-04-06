import "./Dashboard.css";

function Dashboard() {
    return (
      <main>
        <section>
          <h2>Bem-vindo ao portal do aluno</h2>
        </section>
  
        <section className="card-mural">
          <h3>Mural de Avisos</h3>
          <p>
            Inscrição para o projeto de extensão <br />
            Eleição para representante de turma
          </p>
        </section>
  
        <section className="card-mural">
          <h3>Calendário Acadêmico</h3>
          <p>
            23/02 - Início do período letivo 2026-1 <br />
            25/04 - Prazo final para aplicação da P1 <br />
            23/06 - Prazo final para aplicação da P2 <br />
            04/07 - Fim do período letivo 2026-1
          </p>
        </section>
  
        <section className="card-mural">
          <h3>Minhas Disciplinas</h3>
          <p>
            BI e Data Warehousing <br />
            Construção de Frontend
          </p>
        </section>
      </main>
    );
  }
  
  export default Dashboard;