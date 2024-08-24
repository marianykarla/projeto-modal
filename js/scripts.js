const abrirModalBotao = document.querySelector("#abrir-modal");
const fecharModalButton = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const alternarModal = () => {
  [modal, fade].forEach((el) => el.classList.toggle("hide"));
  
};

[abrirModalBotao, fecharModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => alternarModal());
});
