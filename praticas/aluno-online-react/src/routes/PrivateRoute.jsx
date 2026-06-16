import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


function PrivateRoute({ children }) {
  const { autenticado } = useAuth();


  return autenticado
    ? children
    : <Navigate to="/login" replace />;
}


export default PrivateRoute;
