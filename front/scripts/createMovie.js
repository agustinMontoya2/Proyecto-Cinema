const crearObjeto = require("./crearObjeto")

module.exports = function createMovie(){
    const titulo = document.querySelector("#inputTitle").value
    const año = document.querySelector("#inputYear").value
    const direct = document.querySelector("#inputDirector").value
    const duracion = document.querySelector("#inputDuration").value

    const genero = document.querySelector("#inputGenres").value.split(', ')
    

    const raking = document.querySelector("#inputRate").value
    const imagUrl = document.querySelector("#inputImg").value


    const pelicula = {
        title: titulo,
        year: año,
        director: direct,
        duration: duracion,
        genre: genero,
        rate: raking,
        poster: imagUrl
    }

    const tarjeta = crearObjeto(pelicula)
    recomend.appendChild(tarjeta)

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
