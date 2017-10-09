function makeAdder(x) {
	return function(y) {
		return x + y;
	};
}

var add5to = makeAdder(5);
var add100to = makeAdder(100);

console.log(add5to(10));
console.log(add100to(10));


