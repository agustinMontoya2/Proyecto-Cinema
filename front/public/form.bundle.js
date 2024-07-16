/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/crearObjeto.js":
/*!********************************!*\
  !*** ./scripts/crearObjeto.js ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = function crearObjeto(pelicula) {\r\n    const {title, year, director, duration, genre, rate, poster} = pelicula\r\n    \r\n    const imagen = document.createElement(\"img\")\r\n    imagen.src = poster\r\n    imagen.onerror = () => {imagen.src = (\"./assets/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300 (1).jpg\")}\r\n\r\n    const titulo = document.createElement(\"h4\")\r\n    titulo.innerHTML = title\r\n    titulo.className= \"tituloPelicula\"\r\n\r\n    const puntuacion = document.createElement(\"p\")\r\n    puntuacion.innerHTML = rate + \"⭐\"\r\n\r\n    const duracion = document.createElement(\"p\")\r\n    duracion.innerHTML = duration\r\n\r\n    const divDescripcion = document.createElement(\"div\")\r\n    const generos = genre\r\n    const descripcionGeneros = Array.isArray(genre) ? generos.join(', ') : ''\r\n\r\n    const sinapsis = `${title} is a move created in the year ${year} of the genre ${descripcionGeneros}`\r\n    const descripcion = document.createElement(\"p\")\r\n    descripcion.innerHTML = sinapsis\r\n\r\n    const creador = document.createElement(\"h4\")\r\n    creador.innerHTML = director\r\n\r\n    const imdb = document.createElement(\"a\")\r\n    imdb.href = `https://www.imdb.com/find/?q=${encodeURIComponent(title)}&ref_=nv_sr_sm`;\r\n    imdb.target = \"_blank\";\r\n    imdb.className = \"imdb\"\r\n\r\n    \r\n    const tarjeta = document.createElement(\"div\")\r\n    tarjeta.appendChild(imdb)\r\n    imdb.appendChild(titulo)\r\n    imdb.appendChild(imagen)\r\n    imdb.appendChild(creador)\r\n\r\n    const puntuacionDuracion = document.createElement(\"div\")\r\n    puntuacionDuracion.appendChild(puntuacion)\r\n    puntuacionDuracion.appendChild(duracion)\r\n    puntuacionDuracion.className = \"puntuacionDuracion\"\r\n    \r\n\r\n    divDescripcion.appendChild(puntuacionDuracion)\r\n\r\n    divDescripcion.appendChild(descripcion)\r\n    divDescripcion.className = \"movieDate\"\r\n    tarjeta.appendChild(divDescripcion)\r\n    tarjeta.className = \"movieCard\"\r\n\r\n\r\n    return tarjeta\r\n}\r\n\r\n\n\n//# sourceURL=webpack://front/./scripts/crearObjeto.js?");

/***/ }),

/***/ "./scripts/createMovie.js":
/*!********************************!*\
  !*** ./scripts/createMovie.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const crearObjeto = __webpack_require__(/*! ./crearObjeto */ \"./scripts/crearObjeto.js\")\r\n\r\nmodule.exports = function createMovie(){\r\n    const titulo = document.querySelector(\"#inputTitle\")\r\n    const año = document.querySelector(\"#inputYear\")\r\n    const direct = document.querySelector(\"#inputDirector\")\r\n    const duracion = document.querySelector(\"#inputDuration\")\r\n\r\n    const genero = document.querySelector(\"#inputGenres\")\r\n    \r\n\r\n    const raking = document.querySelector(\"#inputRate\")\r\n    const imagUrl = document.querySelector(\"#inputImg\")\r\n\r\n\r\n    const pelicula = {\r\n        title: titulo.value,\r\n        year: año.value,\r\n        director: direct.value,\r\n        duration: duracion.value,\r\n        genre: genero.value.split(', '),\r\n        rate: raking.value,\r\n        poster: imagUrl.value\r\n    }\r\n\r\n    const tarjeta = crearObjeto(pelicula)\r\n    recomend.appendChild(tarjeta)\r\n\r\n    titulo.value = \"\"\r\n    año.value = \"\"\r\n    direct.value = \"\"\r\n    duracion.value = \"\"\r\n    genero.value = \"\"\r\n    raking.value = \"\"\r\n    imagUrl.value = \"\"\r\n\r\n    if (pelicula.genre.includes(\"Action\")){\r\n        const tarjeta = crearObjeto(pelicula)\r\n        accion.appendChild(tarjeta)\r\n    }\r\n    if (pelicula.genre.includes(\"Adventure\")){\r\n        const tarjeta = crearObjeto(pelicula)\r\n        aventura.appendChild(tarjeta)\r\n    }\r\n    if (pelicula.genre.includes(\"Comedy\")){\r\n        const tarjeta = crearObjeto(pelicula)\r\n        comedia.appendChild(tarjeta)\r\n    }\r\n    if (pelicula.genre.includes(\"Sci-Fi\")){\r\n        const tarjeta = crearObjeto(pelicula)\r\n        SciFi.appendChild(tarjeta)\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://front/./scripts/createMovie.js?");

/***/ }),

/***/ "./scripts/form.js":
/*!*************************!*\
  !*** ./scripts/form.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const createMovie = __webpack_require__(/*! ./createMovie */ \"./scripts/createMovie.js\");\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  const btnForm = document.querySelector(\"#sendForm\");\r\n  const btnDelete = document.querySelector(\"#deleteValue\");\r\n\r\n  const title = document.getElementById(\"inputTitle\");\r\n  const year = document.getElementById(\"inputYear\");\r\n  const director = document.getElementById(\"inputDirector\");\r\n  const duration = document.getElementById(\"inputDuration\");\r\n  const genres = document.getElementById(\"inputGenres\");\r\n  const rate = document.getElementById(\"inputRate\");\r\n  const poster = document.getElementById(\"inputImg\");\r\n\r\n  btnDelete.addEventListener(\"click\", () => {\r\n    title.value = \"\";\r\n    year.value = \"\";\r\n    director.value = \"\";\r\n    duration.value = \"\";\r\n    genres.value = \"\";\r\n    rate.value = \"\";\r\n    poster.value = \"\";\r\n  });\r\n  btnForm.addEventListener(\"click\", () => {\r\n    if (\r\n      title.value.length > 0 &&\r\n      year.value > 0 &&\r\n      year.value < 9999 &&\r\n      director.value.length > 0 &&\r\n      duration.value.length > 0 &&\r\n      genres.value.length > 0 &&\r\n      rate.value > 0 &&\r\n      rate.value < 10 &&\r\n      poster.value.length > 0\r\n    ) {\r\n      alert(\"hay titulo\");\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://front/./scripts/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/form.js");
/******/ 	
/******/ })()
;