$( document ).ready(function() {
    console.log( "ready!" ); 

$.ajax({
	url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789',
	success: function successHandler(marvelAPI) {
		
		function getRandomArbitrary(e) {
			return Math.floor(Math.random() * e) + 1;
		} 


		var allMarvelCharacters	= marvelAPI.data.results; 
	
		var character1 = getRandomArbitrary(characters.length);
		var character2 = getRandomArbitrary(characters.length);	
		var character3 = getRandomArbitrary(characters.length);
		
		character1 = allMarvelCharacters[character1];
		character2 = allMarvelCharacters[character2];
		character3 = allMarvelCharacters[character3];

		allMarvelCharacters = [];

		allMarvelCharacters.push(character1);
		allMarvelCharacters.push(character2);
		allMarvelCharacters.push(character3);

		allMarvelCharacters.forEach(function (character) {
			var characterThumbnail = character.thubmnail.path+"."+character.thumbnail.extension;
			$(".random character 1").html("<img src='"+characterThumbnail+"'>");
			$(".random character 2").html("<img src='"+characterThumbnail+"'>");
			$(".random character 3").html("<img src='"+characterThumbnail+"'>");


		});
			}});

$.ajax({
	url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
	success: function successHandler(marvelAPI) {
		
		function getRandomArbitrary(e) {
			return Math.floor(Math.random() * e) + 1;
		} 


		var allMarvelComcis	= marvelAPI.data.results; 
	
		var comic1 = getRandomArbitrary(characters.length);
		var comic2 = getRandomArbitrary(characters.length);	
		var comic3 = getRandomArbitrary(characters.length);
		
		comic1 = allMarvelComics[comic1];
		comic2 = allMarvelComics[comic2];
		comic3 = allMarvelComics[comic3];

		allMarvelComics = [];

		allMarvelComics.push(comic1);
		allMarvelComics.push(comic2);
		allMarvelComics.push(comic3);

		allMarvelComics.forEach(function (comic) {
			var comicThumbnail = comic.thubmnail.path+"."+comic.thumbnail.extension;
			$(".random comic 1").html("<img src='"+comicThumbnail+"'>");
			$(".random comic 2").html("<img src='"+comicThumbnail+"'>");
			$(".random comic 3").html("<img src='"+comicThumbnail+"'>");


		});
			}});

		

});*/

