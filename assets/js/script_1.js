/* initalized variables from html */
const movieInput = $("placeholder");
const searchBtn = $("placeholder");
const clearBtn = $("placeholder");
const movieContainerEl = $("placeholder");
const movieSimilarEl = $("placeholder");
/* tastedive api */
const APIKEY1 = "373213-schoolpr-R7IG77YE";
/* Utelly api */
const APIKEY2 = "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"
/*query urls */
const tasteDiveURL = `https://tastedive.com/api/similar?${movieInput}&k=373213-schoolpr-R7IG77YE`
const utellyURL = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieInput}&country=us`
/*utelly info */
// "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
// "x-rapidapi-key": "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"

/* function to clear the elements */
function clear() {
    [...el.childNodes].forEach(element => {
        element.remove();
    })
};


/*search function */
searchBtn.addEventListener("click", function(){
    event.preventDefault();
    clear()
});