
$( document ).ready(function() {
    console.log( "ready!" );


$.ajax({
	url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
	success: function successHandler(marvelAPI) {
		console.log(marvelAPI);

	function getRandomArbitrary(e) {
			return Math.floor(Math.random() * e) + 1;
		}

		var allMarvelComics = marvelAPI.data.results;


		// function buildPrices(prices) {
		// 	var bigString = "";
		// 	prices.forEach(function(price) {
		// 		bigString += `<p>${price.price}</p>`;
		// 	});

		// 	return bigString;
		// }

		 allMarvelComics.forEach(function (comic){
    	var comicPicture = comic.thumbnail.path+"."+comic.thumbnail.extension;
	    var comicPrice = comic.prices;
	    //comicPrice = buildPrices(comicPrice);
	    //characterComic = getComics(characterComic);
    	$(".Memphis").append('<div class="col-lg-4 characters secondLeft"><div class="box topLeft"><img class="characterImage" src='+comicPicture+'></div><h3>'+comic.title+'</h3><div class="moreInfo"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">More Info</button></div><div class="collapse" id="collapseExample"><div class="card card-block"><p class="charDescription">'+comic.price+'</p><p class="charComic"></p></div></div>');

 });


  }
});

}); 