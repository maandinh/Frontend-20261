import "./Sidebar.css";


function Sidebar() {
    return (
      <aside className="sidebar">
        <header className="sidebar-header">
          <img src="learn.svg" alt="Ícone de capelo" />
          <h3>Aluno Online</h3>
        </header>
 
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>
    );
  }
 
  export default Sidebar;
