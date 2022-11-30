const sliderElemnt = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const tooltip = document.querySelector(".tooltip");

const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "123456789";
const caracteresEspeciais = "!@#$%&*.?/|;";

const charset = alfabeto + numeros + caracteresEspeciais;

let novaSenha = "";

sizePassword.innerHTML = sliderElemnt.value;

sliderElemnt.addEventListener("input", () => {
  sizePassword.innerHTML = sliderElemnt.value;
});

buttonElement.addEventListener("click", () => {
  let senha = "";
  let qtdeCaracter = charset.length;

  for (let i = 0; i < sliderElemnt.value; i++) {
    senha += charset.charAt(Math.floor(Math.random() * qtdeCaracter));
  }

  containerPassword.classList.remove("hide");
  password.innerHTML = senha;
  novaSenha = senha;
  tooltip.innerHTML = "Clique na senha para copiar ☝";
});

containerPassword.addEventListener("click", () => {
  navigator.clipboard.writeText(novaSenha);
  tooltip.innerHTML = "Senha copiada com sucesso! ✌";
});
