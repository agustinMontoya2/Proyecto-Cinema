const createMovie = require("./createMovie")

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".inicio1")
    const formulario = document.querySelector("#divFormCreate")
    const agregarPelicula = document.querySelector(".addMovieCard")
    const btnForm = document.querySelector("#sendForm")
    boton.addEventListener("click", ()=> {
        event.preventDefault()
        formulario.style.display = "none"
    })
    agregarPelicula.addEventListener("click", ()=> {
        formulario.style.display = "flex"
    })
    btnForm.addEventListener("click", () => {
        event.preventDefault()
        createMovie()
        alert("Enviado")
    })
})
