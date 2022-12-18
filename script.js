/* API 1*/
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=157cf04da141bc65808f11780a151648&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=157cf04da141bc65808f11780a151648&query="'
/* API 1*/

/**************************************************************************
 *  Documentacion                                                         *
 *                                                                        *
 *                                                                        *
 * https://developers.themoviedb.org/3/getting-started/introduction       *
 * https://www.themoviedb.org/settings/api                                *
 **************************************************************************/

const main = document.getElementById('main')
const form= document.getElementById("form");
const search = document.getElementById('search');

//What is async?

//async a process operates independently of other processes.

//await operator suspends evaluation of the enclosing async method until the asynchronous operation represented by its operand completes


getMovies(API_URL);
async function getMovies(url) {
   const response = await fetch(url)  //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object.

   //If the request fails due to some network problems, the promise is rejected.

   //console.log(response + " response") 

   //console.log(response);
   const data = await response.json()   //response.json() is a method on the Response object that lets you extract a JSON object formthe response. The method 
   console.log(data)                  //returns a promise, so you have to wait for the JSON: await response.json()
   showMovies(data.results);
}

function showMovies(movies) {

   let count = 0;
   main.innerHTML = '';

   movies.forEach(function (movie) {
      const { title, poster_path, vote_average, overview } = movie;

      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');

                                                 // `` esto es para usar el texto como template sin tax
      movieEl.innerHTML = ` 
  <a  href="https://www.youtube.com/results?search_query=${title} movie official " class="a-tag">
  <img src="${IMG_PATH + poster_path}" alt="${title}" id="${count}")>
  <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
  </div>
  <div class="overview" id=${count}>
<h3>Overview</h3>
${overview}
  </div>
  </a>
  `
   main.appendChild(movieEl);
   })
   /*code in progress
   const Pageselector = document.createElement('div');
   Pageselector.classList.add('Page-select')
   const container = document.createElement('div');
   container.classList.add('container')
   let max_page = 10
   for (let index = 1; index <= max_page; index++) {
      const Pageselectorbutton = document.createElement('button');
      Pageselectorbutton.classList.add('Pagebutton')
      Pageselectorbutton.innerText = index
      container.appendChild(Pageselectorbutton)
   }
   Pageselector.appendChild(container);
   document.body.appendChild(Pageselector);
   */

}
function getClassByRate(vote) {
   if (vote >= 8) {
      return 'green'
   }
   else if (vote >= 5) {
      return 'orange'
   }
   else {
      return 'red'
   }
}

from.addEventListener('submit', (e) =>  //An event listener is a procedure in JavaScript that waits for an event to occur. in this case is the submit buttton 
                                          //The simple example of an event is a user clicking the mouse or pressing a key on the keyboard.
                                          // (e)=> is a function Anonymous Function is a function that does not have any name associated with it
                                          //e is the event the preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.  
{
   e.preventDefault()                   //evitar el default outcome
   const searchTerm = search.value;

   if (searchTerm && searchTerm !== '') { //si searchTerm no esta vacio haz el request
      getMovies(SEARCH_API + searchTerm)

                                          //  console.log(SEARCH_API + searchTerm);
      search.value = ''                   //reset search value 
   } else {
      window.location.reload();           //reloads the current URL, like the Refresh button
   }
}
)



