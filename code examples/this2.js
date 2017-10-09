var dog = {
	sound: "bow bow",
	bark: function() {
		console.log("Barking.." + this.sound);
		var barkLoudly = function() {
			console.log("Barking Loudly.." + this.sound);
		}();
	}
}

dog.bark();

