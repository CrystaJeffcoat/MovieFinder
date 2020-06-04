/* initalized variables from html */
const movieInput = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
// const movieContainerEl = $("#");
// const movieSimilarEl = $("placeholder");

/* tastedive api key */
const APIKEY1 = "373213-schoolpr-R7IG77YE";

/*query urls */
const tasteDiveURL = (movieInput, apikey) => `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?limit=3&q=movie:${movieInput}&k=${APIKEY1}`;

/* query function */
 function fetchMovieSimilarity(movie){
     return fetch(tasteDiveURL(movie, APIKEY1)).then((response) => response.json());
};

function similarMovies(search) {
    const similarMovieList = document.getElementById("movie-list");
    const similarMovieList1 = document.getElementById("movie-list1");
    const similarMovieList2 = document.getElementById("movie-list2");

    fetchMovieSimilarity(search).then((data) => {
        similarMovieList.textContent = `${data.Similar.Results[0].Name}`
        similarMovieList1.textContent = `${data.Similar.Results[1].Name}`
        similarMovieList2.textContent = `${data.Similar.Results[2].Name}`
    })

}



// /* function to clear the elements */
// function clear(el) {
//     [...el.childNodes].forEach(element => {
//         element.remove();
//     })
// };


/*search function */
searchBtn.addEventListener("click", function(){
  event.preventDefault();
  
  const search = movieInput.value;
  
  similarMovies(search);

});

