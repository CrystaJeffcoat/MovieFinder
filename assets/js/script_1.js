/* initalized variables from html */
const movieInput = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
// const movieContainerEl = $("#");
// const movieSimilarEl = $("placeholder");

/* tastedive api key */
const APIKEY1 = "373213-schoolpr-R7IG77YE";
const APIKEY2 = "trilogy"

/*query urls */
const tasteDiveURL = (movieInput, apikey) => `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?limit=3&q=movie:${movieInput}&k=${APIKEY1}`;
const ombdURL = (movieInput, apikey) => `https://www.omdbapi.com/?t=${movieInput}&apikey=${APIKEY2}`;

/* query function */
function fetchMovieData(movie){
    return fetch(ombdURL(movie, APIKEY2)).then((response) => response.json());
};

 function fetchMovieSimilarity(movie){
     return fetch(tasteDiveURL(movie, APIKEY1)).then((response) => response.json());
     
};

function similarMovies(search) {
    const similarMovieList = document.getElementById("rel-movie-1");
    const similarMovieList1 = document.getElementById("rel-movie-2");
    const similarMovieList2 = document.getElementById("rel-movie-3");

    fetchMovieSimilarity(search).then((data) => {
        const movie1 = `${data.Similar.Results[0].Name}`;
        const movie2 = `${data.Similar.Results[1].Name}`;
        const movie3 = `${data.Similar.Results[2].Name}`;

        similarMovieList.textContent = movie1;
        similarMovieList1.textContent = movie2;
        similarMovieList2.textContent = movie3;

        fetchMovieData(movie1).then((data) => {
            const movie1Poster = `${data.Poster}`
            console.log(movie1Poster)
        })

        fetchMovieData(movie2).then((data) => {
            const movie2Poster = `${data.Poster}`
            console.log(movie2Poster)
        })

        fetchMovieData(movie3).then((data) => {
            const movie3Poster = `${data.Poster}`
            console.log(movie3Poster)
        })
    })

}

similarMovies("frozen")

// /* function to clear the elements */
// function clear(el) {
//     [...el.childNodes].forEach(element => {
//         element.remove();
//     })
// };


// /*search function */
// searchBtn.addEventListener("click", function(){
//     event.preventDefault();
//     clear()
// });

