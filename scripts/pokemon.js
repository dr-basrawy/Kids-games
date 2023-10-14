var pokeAPIBaseUrl = "https://pokeapi.co/api/v2/pokemon/";
var game = document.getElementById('game');
var firstPick;
var isPaused = true;
var matches;
var colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
};
function loadPokemon(callback) {
    var randomIds = [];
    while (randomIds.length < 8) {
        var randomNumber = Math.ceil(Math.random() * 150);
        if (randomIds.indexOf(randomNumber) === -1) randomIds.push(randomNumber);
    }
    var loadedPokemon = [];
    for (var i = 0; i < randomIds.length; i++) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', pokeAPIBaseUrl + randomIds[i]);
        xhr.onload = function () {
            if (this.status === 200) {
                loadedPokemon.push(JSON.parse(this.responseText));
                if (loadedPokemon.length === randomIds.length) callback(loadedPokemon);
            }
        };
        xhr.send();
    }
}
function resetGame() {
    game.innerHTML = '';
    isPaused = true;
    firstPick = null;
    matches = 0;
    setTimeout(function () {
        loadPokemon(function (loadedPokemon) {
            displayPokemon(loadedPokemon.concat(loadedPokemon));
            isPaused = false;
        });
    }, 200);
}
function displayPokemon(pokemon) {
    pokemon.sort(function () { return Math.random() - 0.5; });
    var pokemonHTML = '';
    for (var i = 0; i < pokemon.length; i++) {
        var type = pokemon[i].types[0]?.type?.name;
        var color = colors[type] || '#F5F5F5';
        pokemonHTML +=
            '<div class="card" onclick="clickCard(event)" data-pokename="' + pokemon[i].name + '" style="background-color:' + color + ';">' +
            '<div class="front "></div>' +
            '<div class="back rotated" style="background-color:' + color + ';">' +
            '<img src="' + pokemon[i].sprites.front_default + '" alt="' + pokemon[i].name + '"  />' +
            '<h2>' + pokemon[i].name + '</h2>' +
            '</div>' +
            '</div>';
    }
    game.innerHTML = pokemonHTML;
}
function clickCard(e) {
    var pokemonCard = e.currentTarget;
    var front = pokemonCard.querySelector(".front");
    var back = pokemonCard.querySelector(".back");
    if (front.classList.contains("rotated") || isPaused) {
        return;
    }
    isPaused = true;
    front.classList.toggle('rotated');
    back.classList.toggle('rotated');
    if (!firstPick) {
        firstPick = pokemonCard;
        isPaused = false;
    }
    else {
        var secondPokemonName = pokemonCard.dataset.pokename;
        var firstPokemonName = firstPick.dataset.pokename;
        if (firstPokemonName !== secondPokemonName) {
            var firstFront = firstPick.querySelector(".front");
            var firstBack = firstPick.querySelector(".back");
            setTimeout(function () {
                front.classList.toggle('rotated');
                back.classList.toggle('rotated');
                firstFront.classList.toggle('rotated');
                firstBack.classList.toggle('rotated');
                firstPick = null;
                isPaused = false;
            }, 500)
        } else {
            matches++;
            if (matches === 8) {
                console.log("WINNER");
            }
            firstPick = null;
            isPaused = false;
        }
    }
}
resetGame();