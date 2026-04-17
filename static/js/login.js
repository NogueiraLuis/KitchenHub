const cadastro = document.querySelector("#criar-conta");

const trocarLogin = document.querySelector("#cadastro");

const telaLogin = document.querySelector(".login");

const voltarLogin = document.querySelector("#voltar-login");

cadastro.addEventListener("click", (e) => {
  e.preventDefault();

  telaLogin.style.display = "none";
  trocarLogin.style.display = "flex";
});

voltarLogin.addEventListener("click", (e) => {
  e.preventDefault();

  trocarLogin.style.display = "none";
  telaLogin.style.display = "flex";
});
