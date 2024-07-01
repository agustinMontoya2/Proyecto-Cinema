const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  
  {
    title: "The Conjuring",
    year: 2013,
    director: "James Wan",
    duration: "1h 52min",
    genre: [],
    rate: 7.5,
    poster:
    "https://imgs.search.brave.com/tOuxe_i7i_uzrGXelxzB_7uU9ThllC7uOIBsq_Pd8Q8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXBv/ci5jb20vcmVzaXpl/ci9adHpvVG5Pc2ZL/aWxQXzJuZE9oVy1F/ZVc5SzA9LzQ2NXgw/L3NtYXJ0L2ZpbHRl/cnM6Zm9ybWF0KGpw/ZWcpOnF1YWxpdHko/NzUpL2Nsb3VkZnJv/bnQtdXMtZWFzdC0x/LmltYWdlcy5hcmNw/dWJsaXNoaW5nLmNv/bS9lbGNvbWVyY2lv/L0pZSzRXQVJOTzVG/UFJCVEFSWTQyQk5E/Tk1RLmpwZw"
},
{
    title: "Fast and Furius X",
    year: 2023,
    director: "Louis Leterrier",
    duration: "2h 21min",
    genre: ["action", "adventure"],
    rate: 5.7,
    poster:
    "https://imgs.search.brave.com/Y0yYIjytSCDg8kpkHsvE8qBh-ZH3RCYlnrBaT13hLI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXBv/ci5jb20vcmVzaXpl/ci9FdmRGOXY0VGZL/VFpMMnZzMDJVc2Y2/di1WOWs9LzYyMHgw/L3NtYXJ0L2ZpbHRl/cnM6Zm9ybWF0KGpw/ZWcpOnF1YWxpdHko/NzUpL2Nsb3VkZnJv/bnQtdXMtZWFzdC0x/LmltYWdlcy5hcmNw/dWJsaXNoaW5nLmNv/bS9lbGNvbWVyY2lv/L1hTSE1CUURJNkJF/T0xHVU5BRDdYSVRC/QkVJLnBuZw"
},
{
    title: "Inside Out",
    year: 2015,
    director: "Pete Docter",
    duration: "1h 34min",
    genre: ["adventure"],
    rate: 8.1,
    poster:
    "https://imgs.search.brave.com/IGqIhPn2Diqu4-k5vhidzlLGDa4Lpl1WNwPj_7W9hQE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFuYWNpb24uY29t/LmFyL3Jlc2l6ZXIv/djIvaW50ZW5zYS1t/ZW50ZS0yLWxvcy1k/ZXRhbGxlcy1jdXJp/b3NpZGFkZXMteS10/b2RvLTREVVZZTFpS/WVZFV0ZQNlJPUk5J/SFVCR1NFLkpQRUc_/YXV0aD0wMGMxZGM0/ZjU0NDg5MzI1MDMz/OWEyM2IxMjZkZjMz/OWJlOTk5ZDExNGY5/Y2YzODFiYWYwZTVj/N2E3ZjU4NTJiJndp/ZHRoPTQyMCZoZWln/aHQ9MjgwJnF1YWxp/dHk9NzAmc21hcnQ9/dHJ1ZQ"
},
{
    title: "The Joker",
    year: 2019,
    director: "Tod Phillips",
    duration: "2h 2min",
    genre: [ "adventure", "comedy"],
    rate: 8.4,
    poster:
    "https://imgs.search.brave.com/pY16lIS6QCtfIVCIVnoKsP66-xCqfyFT2dHVTtLvtIk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmJs/b2dzLmVzL2I2YjNj/My9qb2tlci1qb2Fx/dWluLXBob2VuaXgv/NDUwXzEwMDAuanBl/Zw"
},
{
    title: "Shrek",
    year: 2001,
    director: "Andrew Adamson",
    duration: "1h 31min",
    genre: ["comedy"],
    rate: 7.9,
    poster:
    "https://imgs.search.brave.com/kSlLbeqsd2O2yoDt_whR8seDp465CtgyxrlaeJO_YSw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waWNm/aWxlcy5hbHBoYWNv/ZGVycy5jb20vNDIy/LzQyMjU1MS5qcGc"
},
{
    title: "The Amazing Spider-Man",
    year: 2014,
    director: "Marc Webb",
    duration: "2h 22min",
    genre: ["fantasy", "sci-fi"],
    rate: 6.6,
    poster:
    "https://imgs.search.brave.com/Uf0QwAh9jJCUD_DxTyJzsZQQkgCiCYaI7remxKet9NY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1UUXpNREky/TVRZeU4xNUJNbDVC/YW5CblhrRnRaVGd3/TlRReU9ETTFNVEVA/LmpwZw"
},
];
