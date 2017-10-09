//object interface 1
var animal = (function(s) {
	var sound = s;
	return {
		playSound: function() {
			console.log(sound);
		}
	}
})("bow bow");
console.log("Trying to access sound " + animal.sound);
animal.playSound();

//object interface 2
var animal = (function(s) {
	var sound = s;
	var playSound = function() {
		console.log(sound);
	}
	return {
		playSound: playSound
	}
})("bow bow");
console.log("Trying to access sound " + animal.sound);
animal.playSound();