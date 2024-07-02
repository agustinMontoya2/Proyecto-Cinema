//import { tempData } from "./tempData.js";

class Movie {
    constructor(title, year, director, duration,genre, rate, poster) {
        this.title = title 
        this.year =  year 
        this.director = director 
        this.duration = duration 
        this.genre = genre 
        this.rate = rate 
        this.poster = poster 
    }
}

class Repository {
    constructor(){
        this.movies = []
    }
    createMovie ({title, year, director, duration,genre, rate, poster}) {
        const movie = new Movie (title, year, director, duration,genre, rate, poster)
        this.movies.push(movie)
    }
    createMovies(moviesData) {
        moviesData.forEach(movieData => this.createMovie(movieData))
    }
    getMovies () {
        return this.movies
    }
}
const repo = new Repository

$.get("https://students-api.up.railway.app/movies", (data, state)=>{
    repo.createMovies(data)
    console.log(repo.movies);
    renderPeliculas()
})

const movies = repo.movies

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

function renderPeliculas() {
    const recomendados = document.querySelector("#recomend")
    const accion = document.querySelector("#accion")
    const aventura = document.querySelector("#aventura")
    const comedia = document.querySelector("#comedia")

    movies.forEach(pelicula => {
        const tarjeta = crearObjeto(pelicula)
        recomendados.appendChild(tarjeta)})


            ////division de genero////
            //action
        movies.forEach(pelicula => {
            if (pelicula.genre.includes("Action")){
                const tarjeta = crearObjeto(pelicula)
                accion.appendChild(tarjeta)
            }
        }) //adventure
        movies.forEach(pelicula => {
            if (pelicula.genre.includes("Adventure")){
                const tarjeta = crearObjeto(pelicula)
                aventura.appendChild(tarjeta)
            }


        }) //Comedy
        movies.forEach(pelicula => {
            if (pelicula.genre.includes("Comedy")){
                const tarjeta = crearObjeto(pelicula)
                comedia.appendChild(tarjeta)
            }
        }) //sci-fi
        movies.forEach(pelicula => {
            if (pelicula.genre.includes("Sci-Fi")){
                const tarjeta = crearObjeto(pelicula)
                SciFi.appendChild(tarjeta)
            }
        })
}
document.addEventListener('DOMContentLoaded', console.log(movies))