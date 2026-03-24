import "./style.css";

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const botao = document.querySelector("button");

botao.addEventListener("click", function (e) {e.preventDefault();
  const emailErro = document.querySelector("#emailErro");
  const senhaErro = document.querySelector("#senhaErro");

  let temErro = false;

  emailErro.textContent = '';
  senhaErro.textContent = '';

  if (email.value == "") {
    emailErro.textContent = "O campo de email é obrigatório.";
    temErro = true;
  } else if (!email.value.includes("@") || !email.value.includes(".")) {
    emailErro.textContent = "Email inválido";
    temErro = true;
  }

  if (senha.value == "") {
    senhaErro.textContent = "O campo senha é obrigatório.";
    temErro = true;
  } else if (senha.value.length < 8) {
    senhaErro.textContent = "Senha deve ter no mínimo 8 caracteres";
    temErro = true;
  }

  if (temErro) return;

 window.location.href = "/index.html";
});