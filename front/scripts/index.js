
const crearObjeto = require("./crearObjeto")
$.get("https://students-api.up.railway.app/movies", (data, state)=>{
    
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
})

