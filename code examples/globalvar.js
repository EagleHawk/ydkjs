var globalvar = [1, 2, 3];
	(function(a) {
		console.log("I ma using a global variable" + a.length);
	})(globalvar);