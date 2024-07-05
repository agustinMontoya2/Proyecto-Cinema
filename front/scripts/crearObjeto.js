module.exports = function crearObjeto(pelicula) {
    const {title, year, director, duration, genre, rate, poster} = pelicula
    
    const imagen = document.createElement("img")
    imagen.src = poster
    imagen.onerror = () => {imagen.src = ("./assets/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300 (1).jpg")}

    const titulo = document.createElement("h4")
    titulo.innerHTML = title
    titulo.className= "tituloPelicula"

    const puntuacion = document.createElement("p")
    puntuacion.innerHTML = rate + "⭐"

    const duracion = document.createElement("p")
    duracion.innerHTML = duration

    const divDescripcion = document.createElement("div")
    const generos = genre
    const descripcionGeneros = Array.isArray(genre) ? generos.join(', ') : ''

    const sinapsis = `${title} is a move created in the year ${year} of the genre ${descripcionGeneros}`
    const descripcion = document.createElement("p")
    descripcion.innerHTML = sinapsis

    const creador = document.createElement("h4")
    creador.innerHTML = director

    const imdb = document.createElement("a")
    imdb.href = `https://www.imdb.com/find/?q=${encodeURIComponent(title)}&ref_=nv_sr_sm`;
    imdb.target = "_blank";
    imdb.className = "imdb"

    
    const tarjeta = document.createElement("div")
    tarjeta.appendChild(imdb)
    imdb.appendChild(titulo)
    imdb.appendChild(imagen)
    imdb.appendChild(creador)

    const puntuacionDuracion = document.createElement("div")
    puntuacionDuracion.appendChild(puntuacion)
    puntuacionDuracion.appendChild(duracion)
    puntuacionDuracion.className = "puntuacionDuracion"
    

    divDescripcion.appendChild(puntuacionDuracion)

    divDescripcion.appendChild(descripcion)
    divDescripcion.className = "movieDate"
    tarjeta.appendChild(divDescripcion)
    tarjeta.className = "movieCard"


    return tarjeta
}

