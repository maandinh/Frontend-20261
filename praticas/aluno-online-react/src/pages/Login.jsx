import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import logo from "../assets/learn.svg";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [erros, setErros] = useState({});

  function handleSubmit(e) {
    e.preventDefault();


    const novosErros = {};

    if (!email) {
      novosErros.email = "O campo de email é obrigatório.";
    }

    if (!senha) {
      novosErros.senha = "O campo de senha é obrigatório.";
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      return;
    }

    login({
      username: email,
      password: senha,
    });

    navigate("/");
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-lg p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="Aluno Online"
            className="w-24 mb-4"
          />


          <h1 className="text-4xl font-bold">
            Aluno Online
          </h1>
        </div>

        <div className="mb-5">
          <label className="block mb-2">
            E-mail
          </label>

          <input
            type="email"
            className="w-full border rounded p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          {erros.email && (
            <p className="text-red-600 mt-2">
              {erros.email}
            </p>
          )}
        </div>



        <div className="mb-5">
          <label className="block mb-2">
            Senha
          </label>

          <input
            type="password"
            className="w-full border rounded p-2"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erros.senha && (
            <p className="text-red-600 mt-2">
              {erros.senha}
            </p>
          )}
        </div>


        <button
          type="submit"
          className="w-full bg-gray-200 py-3 rounded"
        >
          Entrar
        </button>
      </form>


      <p className="mt-8">
        © 2026. Todos os direitos reservados.
      </p>
    </div>
  );
}


export default Login;