document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".inicio1")
    const formulario = document.querySelector("#divFormCreate")
    const agregarPelicula = document.querySelector(".addMovieCard")
    boton.addEventListener("click", ()=> {
        event.preventDefault()
        formulario.style.display = "none"
    })
    agregarPelicula.addEventListener("click", ()=> {
        formulario.style.display = "flex"
    })
})
