(()=>{var e={344:e=>{e.exports=function(e){const{title:t,year:n,director:r,duration:c,genre:o,rate:d,poster:i}=e,a=document.createElement("img");a.src=i,a.onerror=()=>{a.src="./assets/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300 (1).jpg"};const l=document.createElement("h4");l.innerHTML=t,l.className="tituloPelicula";const u=document.createElement("p");u.innerHTML=d+"⭐";const s=document.createElement("p");s.innerHTML=c;const p=document.createElement("div"),m=o,v=`${t} is a move created in the year ${n} of the genre ${Array.isArray(o)?m.join(", "):""}`,y=document.createElement("p");y.innerHTML=v;const h=document.createElement("h4");h.innerHTML=r;const C=document.createElement("a");C.href=`https://www.imdb.com/find/?q=${encodeURIComponent(t)}&ref_=nv_sr_sm`,C.target="_blank",C.className="imdb";const E=document.createElement("div");E.appendChild(C),C.appendChild(l),C.appendChild(a),C.appendChild(h);const f=document.createElement("div");return f.appendChild(u),f.appendChild(s),f.className="puntuacionDuracion",p.appendChild(f),p.appendChild(y),p.className="movieDate",E.appendChild(p),E.className="movieCard",E}},958:(e,t,n)=>{const r=n(344);e.exports=function(){const e={title:document.querySelector("#inputTitle").value,year:document.querySelector("#inputYear").value,director:document.querySelector("#inputDirector").value,duration:document.querySelector("#inputDuration").value,genre:document.querySelector("#inputGenres").value.split(", "),rate:document.querySelector("#inputRate").value,poster:document.querySelector("#inputImg").value},t=r(e);if(recomend.appendChild(t),e.genre.includes("Action")){const t=r(e);accion.appendChild(t)}if(e.genre.includes("Adventure")){const t=r(e);aventura.appendChild(t)}if(e.genre.includes("Comedy")){const t=r(e);comedia.appendChild(t)}if(e.genre.includes("Sci-Fi")){const t=r(e);SciFi.appendChild(t)}}}},t={};const n=function n(r){var c=t[r];if(void 0!==c)return c.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(958);document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".inicio1"),t=document.querySelector("#divFormCreate"),r=document.querySelector(".addMovieCard"),c=document.querySelector("#sendForm");e.addEventListener("click",(()=>{event.preventDefault(),t.style.display="none"})),r.addEventListener("click",(()=>{t.style.display="flex"})),c.addEventListener("click",(()=>{event.preventDefault(),n(),alert("Enviado")}))}))})();