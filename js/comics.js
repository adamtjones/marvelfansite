$( document ).ready(function() {
    console.log( "ready!" );

$.ajax({
	url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
	success: function successHandler(marvelAPI) {
		console.log(data);

	function getRandomArbitrary(e) {
			return Math.floor(Math.random() * e) + 1;
		}

		var allMarvelComics = marvelAPI.data.results;



		comics.forEach(function (comic){
    	var comicImage = comic.thumbnail.path+"."+comic.thumbnail.extension;
    	$(".Memphis").append('<div class="col-lg-4 comic leftTop"><div class="column secondLeft"><img class="comicImage" src='+comicImage+'></div><h3>'+comic.title+'</h3><div class="moreInfo"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">More Info</button></div><div class="collapse" id="collapseExample"><div class="card card-block"></div></div>');


 });


  }
});

}); 