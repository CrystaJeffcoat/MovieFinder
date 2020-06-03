/* initalized variables from html */
const movieInput = document.getElementById("search-bar");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
// const movieContainerEl = $("#");
// const movieSimilarEl = $("placeholder");

/* tastedive api key */
const APIKEY1 = "373213-schoolpr-R7IG77YE";
/* Utelly api key */
//const APIKEY2 = "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"
/* OMDb api key */
//const APIKEY3 = "trilogy"
/*query urls */
const tasteDiveURL = (movieInput, apikey) => `https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?limit=3&q=movie:${movieInput}&k=${APIKEY1}`;
/*This is just a demo of what the query url should look for utelly maybe */
//const utellyURL = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieInput}&country=us`;
/*utelly info */
// "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
// "x-rapidapi-key": "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"
/* OMDb query url */
// const ombdURL = (movieInput) => `https://www.omdbapi.com/?t="${movieInput}"&apikey=${APIKEY3}`;

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


// /*search function */
// searchBtn.addEventListener("click", function(){
//     event.preventDefault();
//     clear()
// });


    // var queryURL = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=frozen&k=373213-schoolpr-R7IG77YE"
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //       console.log(response)
    //   })

