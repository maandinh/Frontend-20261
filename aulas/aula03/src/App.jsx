import Dashboard from "./pages/Dashboard";
import Boletos from "./pages/Boletos";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";


function App() {
  const pagina = 1;


  switch(pagina) {
    case 1: return <Dashboard />
    case 2: return <Boletos />
    case 3: return <Faltas />
    case 4: return <Notas />
    case 5: return <Requerimentos />
 }
}


export default App;

