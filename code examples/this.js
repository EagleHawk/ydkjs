var sound = "bow bow";
var playSound = function() {
	console.log("Playing.." + this.sound);
}

var cat = {
	sound: "meow..meow..",
	playSound: playSound
}

playSound();
cat.playSound();


