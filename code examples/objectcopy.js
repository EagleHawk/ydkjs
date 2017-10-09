var food = {
	pav: "bhaji",
	puri: "bhaji"
}
var myfood = Object.assign({}, food);
myfood.puri = "shrikhand";
console.log("food:",food);
console.log("myfood:",myfood);