$.get("https://students-api.up.railway.app/movies", (data, state)=>{
    
    renderPeliculas(data)
})

function renderPeliculas(data) {
    data.forEach(pelicula => {
        const tarjeta = crearObjeto(pelicula)
        recomend.appendChild(tarjeta)})
        ////division de genero////
        //action
        data.forEach(pelicula => {
            if (pelicula.genre.includes("Action")){
                const tarjeta = crearObjeto(pelicula)
                accion.appendChild(tarjeta)
            }
        }) //adventure
        data.forEach(pelicula => {
            if (pelicula.genre.includes("Adventure")){
                const tarjeta = crearObjeto(pelicula)
                aventura.appendChild(tarjeta)
            }
        }) //Comedy
        data.forEach(pelicula => {
            if (pelicula.genre.includes("Comedy")){
                const tarjeta = crearObjeto(pelicula)
                comedia.appendChild(tarjeta)
            }
        }) //sci-fi
        data.forEach(pelicula => {
            if (pelicula.genre.includes("Sci-Fi")){
                const tarjeta = crearObjeto(pelicula)
                SciFi.appendChild(tarjeta)
            }
        })
}
function crearObjeto(pelicula) {
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
    const descripcionGeneros = generos.join(', ')

    const sinapsis = `${title} is a move created in the year ${year} of the genre ${descripcionGeneros}`
    const descripcion = document.createElement("p")
    descripcion.innerHTML = sinapsis

    const creador = document.createElement("h4")
    creador.innerHTML = director

    const tarjeta = document.createElement("div")
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(creador)

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

