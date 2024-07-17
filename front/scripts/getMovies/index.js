const getMovies = require("./getMovies");
const detector = document.getElementById("inputTitle");
const buttons = require("../postMovies/buttons");

function inicio() {
  if (detector) {
    const btnForm = document.querySelector("#sendForm");
    const btnDelete = document.querySelector("#deleteValue");

    btnDelete.addEventListener("click", buttons.clean);
    btnForm.addEventListener("click", buttons.post);
  } else {
    getMovies();
  }
}

addEventListener("DOMContentLoaded", inicio());
