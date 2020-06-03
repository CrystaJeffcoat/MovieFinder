
//$(document).ready(function(){

var movieInput = 'iron man';

var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${movieInput}&country=us`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
		"x-rapidapi-key": "f93ad3a3d7mshd6950dec518d715p16a532jsn2fe1c1a90753"
	}
}

$.ajax(settings).done(function (response) {

console.log(response.results[2].locations[1]);

console.log(response);

});

