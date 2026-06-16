import user from "../assets/avatar.svg";
import { useAuth } from "../hooks/useAuth";


function Topbar({ titulo }) {


  const { usuario } = useAuth();


  return (
    <header className="px-6 md:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">


        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            {titulo}
          </h1>


          {usuario && (
            <p className="text-gray-500">
              {usuario.username}
            </p>
          )}
        </div>


        <img
          src={user}
          alt="Avatar"
          className="w-14 h-14 rounded-full"
        />
      </div>
    </header>
  );
}


export default Topbar;
