function makeFun() {
	var name = "veer";

	function displayName() {
		console.log("My name is " + name);
	};
	return displayName;
}
var boy = makeFun();
boy();