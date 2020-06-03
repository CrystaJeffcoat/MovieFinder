const movieInput = $("placeholder");
var queryURL = `https://www.omdbapi.com/?t=${movieInput}&apikey=bc82199e`;

        
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          console.log(response)

          //Display Poster
          var imgURL = response.Poster;
          $(".poster").append("<img src=" + imgURL + ">");

                   

          // Storing the rating data
          var rating = response.Rated;
          $(".rating").text("Rating: " + rating);
         
        
        });