const TMDB_API_Search = "https://api.themoviedb.org/3/search/movie?api_key=157cf04da141bc65808f11780a151648&query=" // code in progress API


// ya tengo el key 
//q determina la palabra a buscar
//& propiedades que pida
//key 2 // AIzaSyBt_UOjpCW8P9n3yhIc4M3ncRN7Ckd0gIU

//AIzaSyDTbpCCkqmwsLw8hjAz6btHgEKBIGPJ9eU
let movie  = [];

 function getMovieArray(item){

   movie = item;
  // console.log(movie);
   // const response = await fetch(Youtube_API_URL + title +"Trailer")
}

  async function  getMoviesTreailers(movie_title){

  const response = await fetch(TMDB_API_Search + movie_title)  
                                 
  const data = await response.json()
  //console.log(movie_title)
  //console.log(data)
  traielrID(data)
 
  return movieIDsearch(traielrID(data));
}

async function traielrID(dataid)
{
  const response = await fetch(`https://api.themoviedb.org/3/movie/${dataid.results[0].id}/videos?api_key=157cf04da141bc65808f11780a151648`)
  const data = await response.json()

  //console.log(data)

}

function movieIDsearch(data) //
{

}

