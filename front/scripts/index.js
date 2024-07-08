const categories = require("./categories")

const axios = require("axios")

async function getMovies (){
    try {
        const movies = await axios.get("https://students-api.up.railway.app/movies")
        categories(movies.data)
    } catch (error) {
        console.log(error.message);
    }
}
addEventListener("DOMContentLoaded", () => {
    getMovies()
})
