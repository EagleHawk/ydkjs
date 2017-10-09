var activities = {
	speak: function() {
		console.log(this.sound);
	},
	getType: function() {
		console.log(this.type);
	}
}

function animal(type, sound) {
	this.type = type;
	this.sound = sound;
}

animal.prototype = activities;

var doberman = new animal("dog", "bow bow");
var veer = new animal("human", "bababa-babab-nana");

console.log("doberman:");
doberman.getType();
doberman.speak();

console.log("veer:");
veer.getType();
veer.speak();

activities.run = function() {
	console.log(this.type + " is running");
}

doberman.run();
veer.run();

