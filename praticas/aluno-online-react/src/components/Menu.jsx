import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function Menu() {
  const navigate = useNavigate();
  const { logout } = useAuth();


  const itens = [
    {
      nome: "Dashboard",
      rota: "/",
    },
    {
      nome: "Notas",
      rota: "/notas",
    },
    {
      nome: "Faltas",
      rota: "/faltas",
    },
    {
      nome: "Boletos",
      rota: "/boletos",
    },
    {
      nome: "Requerimentos",
      rota: "/requerimentos",
    },
  ];


  function handleLogout() {
    logout();
    navigate("/login");
  }


  return (
    <nav className="flex-1 px-6 p-6">
      <ul className="space-y-5">
        {itens.map((item) => (
          <li key={item.rota}>
            <NavLink
              to={item.rota}
              end={item.rota === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 transition-colors ${
                  isActive
                    ? "text-purple-600 font-bold"
                    : "text-gray-700 hover:text-gray-900"
                }`
              }
            >
              <span>•</span>
              <span>{item.nome}</span>
            </NavLink>
          </li>
        ))}


        <li>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-600 hover:text-red-700 font-medium cursor-pointer"
          >
            <span>•</span>
            <span>Sair</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}


export default Menu;
