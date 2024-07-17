const buttons = require("./buttons");

document.addEventListener("DOMContentLoaded", () => {
  const btnForm = document.querySelector("#sendForm");
  const btnDelete = document.querySelector("#deleteValue");

  btnDelete.addEventListener("click", buttons.clean);
  btnForm.addEventListener("click", buttons.post);
});
