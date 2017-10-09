var pokemon = {
	firstname: 'Pika',
	lastname: 'Chu '
};

var pokemonName = function() {
	var fullname = this.firstname + ' ' + this.lastname;
	console.log(fullname+ 'I choose you!');
};

// creates new object and binds pokemon. 
//'this' of pokemon === pokemon now
var logPokemon = pokemonName.bind(pokemon);

logPokemon(); // 'Pika Chu I choose you!'