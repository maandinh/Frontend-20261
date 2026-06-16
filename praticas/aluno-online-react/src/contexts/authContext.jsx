import { createContext, useState } from "react";
const AuthContext = createContext();


function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState(null);


  const login = (dadosUsuario) => {
    setUsuario(dadosUsuario);
    setAutenticado(true);
  };


  const logout = () => {
    setUsuario(null);
    setAutenticado(false);
  };


  return (
    <AuthContext.Provider
      value={{
        autenticado,
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export { AuthContext, AuthProvider };
