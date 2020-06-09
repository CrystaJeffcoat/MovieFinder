/* initalized variables from html */
const movieInput = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const similarMovieList = document.getElementById("rel-movie-1");
const similarMovieList1 = document.getElementById("rel-movie-2");
const similarMovieList2 = document.getElementById("rel-movie-3");
const mainPoster = document.getElementById("mposter");
const mrating = document.getElementById("mrating");
const movieTitle = document.getElementById("mtitle");
const movieplot = document.getElementById("plot");
const movie1Poster = document.getElementById("rel-poster-1");
const movie1Rating = document.getElementById("rel-rating-1");
const movie2Poster = document.getElementById("rel-poster-2");
const movie2Rating = document.getElementById("rel-rating-2");
const movie3Poster = document.getElementById("rel-poster-3");
const movie3Rating = document.getElementById("rel-rating-3");
const movie1Plot = document.getElementById("plot-similar-movie-1");
const movie2Plot = document.getElementById("plot-similar-movie-2");
const movie3Plot = document.getElementById("plot-similar-movie-3");

/* tastedive api key */
const APIKEY1 = "373213-schoolpr-R7IG77YE";
/* OMBd api key */
const APIKEY2 = "trilogy";

/*query urls */
const tasteDiveURL = (movieInput, apikey) => `https://cors-anywhere.herokuapp.com/http://tastedive.com/api/similar?limit=3&q=movie:${movieInput}&k=${APIKEY1}`;
const ombdURL = (movieInput, apikey) => `https://www.omdbapi.com/?t=${movieInput}&apikey=${APIKEY2}`;


/* query functions */
function fetchMovieData(movie){
    return fetch(ombdURL(movie, APIKEY2)).then((response) => response.json());
};

 function fetchMovieSimilarity(movie){
     return fetch(tasteDiveURL(movie, APIKEY1)).then((response) => response.json());
     
};
/* function that grabs info of movies similar searched from taste dive as well as movie data from OMBd */
function movies(search) {

    fetchMovieSimilarity(search).then((data) => {
        const movie1 = `${data.Similar.Results[0].Name}`;
        const movie2 = `${data.Similar.Results[1].Name}`;
        const movie3 = `${data.Similar.Results[2].Name}`;

        similarMovieList.textContent = movie1;
        similarMovieList1.textContent = movie2;
        similarMovieList2.textContent = movie3;

        fetchMovieData(search).then((data) => {

            mainPoster.setAttribute("src", data.Poster);
            mrating.textContent = `Rated: ${data.Rated}`;
            movieTitle.textContent = `${data.Title}`;
            movieplot.textContent = `${data.Plot}`;
        });

        fetchMovieData(movie1).then((data) => {

            movie1Poster.setAttribute("src", data.Poster);
            movie1Rating.textContent = `Rated: ${data.Rated}`;
            movie1Plot.textContent = `${data.Plot}`;
        });

        fetchMovieData(movie2).then((data) => {

            movie2Poster.setAttribute("src", data.Poster);
            movie2Rating.textContent = `Rated: ${data.Rated}`;
            movie2Plot.textContent = `${data.Plot}`;
        });

        fetchMovieData(movie3).then((data) => {

            movie3Poster.setAttribute("src", data.Poster);
            movie3Rating.textContent = `Rated: ${data.Rated}`;
            movie3Plot.textContent = `${data.Plot}`;
        });
    });

};




/*search function */
searchBtn.addEventListener("click", function(){
  event.preventDefault();
  
  console.log(this)
  const search = movieInput.value;
  
  movies(search);

});
