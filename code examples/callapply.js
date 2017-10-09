var pokemon = {
	firstname: 'Pika',
	lastname: 'Chu '
};

var pokemonName = function(snacks,hobby) {
	var fullname = this.firstname + ' ' + this.lastname;
	console.log(fullname+ "loves "+snacks+" and "+hobby);
};

pokemonName.call(pokemon,'sushi','algorithms');
pokemonName.apply(pokemon,['sushi','algorithms']);