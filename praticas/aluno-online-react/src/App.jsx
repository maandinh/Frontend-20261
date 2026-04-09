import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Rquerimentos"

function App() {
  const pagina = 4;

  let titulo = "";
  let Conteudo;

  switch (pagina) {
    case 1:
      titulo = "Olá, Aluno!";
      Conteudo = <Dashboard />;
      break;
    case 2:
      titulo = "Minhas Faltas";
      Conteudo = <Faltas />;
      break;
    case 3:
      titulo = "Minhas Notas";
      Conteudo = <Notas />;
      break;
       case 4:
      titulo = "Meus Boletos";
      Conteudo = <Boletos />;
      break;
       case 5:
      titulo = "Meus Requerimentos";
      Conteudo = <Requerimentos />;
      break;
    default:
      titulo = "Dashboard";
      Conteudo = <Dashboard />;
  }

  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Topbar titulo={titulo} />
        {Conteudo}
      </div>
    </div>
  );
}

export default App;