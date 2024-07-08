const crearObjeto = require("./crearObjeto")

module.exports = function createMovie(){
    const titulo = document.querySelector("#inputTitle")
    const año = document.querySelector("#inputYear")
    const direct = document.querySelector("#inputDirector")
    const duracion = document.querySelector("#inputDuration")

    const genero = document.querySelector("#inputGenres")
    

    const raking = document.querySelector("#inputRate")
    const imagUrl = document.querySelector("#inputImg")


    const pelicula = {
        title: titulo.value,
        year: año.value,
        director: direct.value,
        duration: duracion.value,
        genre: genero.value.split(', '),
        rate: raking.value,
        poster: imagUrl.value
    }

    const tarjeta = crearObjeto(pelicula)
    recomend.appendChild(tarjeta)

    titulo.value = ""
    año.value = ""
    direct.value = ""
    duracion.value = ""
    genero.value = ""
    raking.value = ""
    imagUrl.value = ""

    if (pelicula.genre.includes("Action")){
        const tarjeta = crearObjeto(pelicula)
        accion.appendChild(tarjeta)
    }
    if (pelicula.genre.includes("Adventure")){
        const tarjeta = crearObjeto(pelicula)
        aventura.appendChild(tarjeta)
    }
    if (pelicula.genre.includes("Comedy")){
        const tarjeta = crearObjeto(pelicula)
        comedia.appendChild(tarjeta)
    }
    if (pelicula.genre.includes("Sci-Fi")){
        const tarjeta = crearObjeto(pelicula)
        SciFi.appendChild(tarjeta)
    }
}
