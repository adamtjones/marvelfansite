/*name & picture of all characters*/
/*underneath each, "Learn More" showing: Description & List of all Comics
character appears in*/
$( document ).ready(function() {
    console.log( "ready!" );


$.ajax({
	url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789',
	success: function successHandler(marvelAPI) {
		console.log(data);

	function getRandomArbitrary(e) {
			return Math.floor(Math.random() * e) + 1;
		}

		var allMarvelCharacters = marvelAPI.data.results;


		 characters.forEach(function (character){
    	var characterPicture = character.thumbnail.path+"."+character.thumbnail.extension;
	    var characterComic = character.comics.items+character.comics.name;
    	$(".Dallas").append('<div class="col-lg-4 characters secondLeft"><div class="box topLeft"><img class="characterImage" src='+characterPicture+'></div><h3>'+character.name+'</h3><div class="moreInfo"><button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">More Info</button></div><div class="collapse" id="collapseExample"><div class="card card-block"><p class="charDescription">'+character.description+'</p><p class="charComic">'+characterComic+'</p></div></div>');

 });


  }
});

});  

