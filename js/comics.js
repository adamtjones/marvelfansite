/*picture, title/name, description & price of each Comic*/
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


		allMarvelComics.forEach(function (comic) {
			var comicThumbnail = comic.thubmnail.path+"."+comic.thumbnail.extension;
			$(".NAMETHISSOMETHING").append("<img src='"+comicThumbnail+"'>");

 });


  }
});

}); 