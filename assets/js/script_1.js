const movieInput = $("placeholder");
const searchBtn = $("placeholder");
const clearBtn = $("placeholder");
const movieContainer = $("placeholder");
const movieSimilar = $("placeholder");

const APIKEY1 = "373213-schoolpr-R7IG77YE";
const APIKEY2 = "77c3dd39demsh29a349456660016p1393dbjsn48ff6737daa5"


function clear() {

};

searchBtn.addEventListener("click", function(){
    event.preventDefault();
    const search = movieInput.value

    clear()


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(updatePage);
})