import Card from "../components/Card";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";


function Dashboard() {
  const avisos = [
    "Eleição para representante de turma",
    "Inscrição para projeto de extensão",
  ];


  const datas = [
    ""
  ];


  const disciplinas = [
    "Construção de Frontend",
    "Devops",
    "Business Intelligence",
  ];
    return (
      <>
      <Sidebar />
      <Main titulo="Bem-vindo ao portal do aluno">
        <Card titulo="Mural de Avisos" itens={avisos}/>
        <Card titulo="Calendário Acadêmico" itens={datas} />
        <Card titulo="Minhas Disciplinas" itens={disciplinas}/>
      </Main>
        </>
    );
}


export default Dashboard;
