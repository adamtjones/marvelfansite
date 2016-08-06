$(document).ready(function() {
    console.log("ready!");

    $.ajax({
        url: 'http://gateway.marvel.com:80/v1/public/characters?apikey=a3d450fd87cce2aeff11efbcc111f789',
        success: function successHandler(marvelAPI) {

            function getRandomArbitrary(e) {
                return Math.floor(Math.random() * e) + 1;
            }

            var allMarvelCharacters = marvelAPI.data.results;
            var character1 = getRandomArbitrary(allMarvelCharacters.length);
            var character2 = getRandomArbitrary(allMarvelCharacters.length);
            var character3 = getRandomArbitrary(allMarvelCharacters.length);

            character1 = allMarvelCharacters[character1];
            character2 = allMarvelCharacters[character2];
            character3 = allMarvelCharacters[character3];

            allMarvelCharacters = [];

            allMarvelCharacters.push(character1);
            allMarvelCharacters.push(character2);
            allMarvelCharacters.push(character3);

            allMarvelCharacters.forEach(function(character) {

                var characterThumbnail = character.thumbnail.path + "." + character.thumbnail.extension;
                $(".characterRow").append('<div class="col-lg-4 feature leftTop"><div class="box topLeft"><img class="characterImage" src=' + characterThumbnail + '></div><h3>' + character.name + '</h3></div>');

            });
        }
    });

    $.ajax({
        url: 'http://gateway.marvel.com:80/v1/public/comics?apikey=a3d450fd87cce2aeff11efbcc111f789',
        success: function successHandler(marvelAPI) {

            function getRandomArbitrary(e) {
                return Math.floor(Math.random() * e) + 1;
            }


            var allMarvelComics = marvelAPI.data.results;

            var comic1 = getRandomArbitrary(allMarvelComics.length);
            var comic2 = getRandomArbitrary(allMarvelComics.length);
            var comic3 = getRandomArbitrary(allMarvelComics.length);

            comic1 = allMarvelComics[comic1];
            comic2 = allMarvelComics[comic2];
            comic3 = allMarvelComics[comic3];

            allMarvelComics = [];

            allMarvelComics.push(comic1);
            allMarvelComics.push(comic2);
            allMarvelComics.push(comic3);

            allMarvelComics.forEach(function(comic) {
                var comicThumbnail = comic.thumbnail.path + "." + comic.thumbnail.extension;
                $(".comicRow").append('<div class="col-lg-4 feature leftBottom"><div class="box bottomLeft"><img class="comicImage" src=' + comicThumbnail + '></div><h3>' + comic.title + '</h3></div>');



            });
        }
    });



});