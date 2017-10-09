var dailyfood=["burger","pizza","noodles",[1,2,3]];

//Makes a copy
var weekendfood=dailyfood.slice();

weekendfood.push("pav bhaji");
console.log("After First Push..");
console.log("weekendfood:",weekendfood);
console.log("dailyfood:",dailyfood);


weekendfood[3].push(4);
console.log("After Second Push..");
console.log("weekendfood:",weekendfood);
console.log("dailyfood:",dailyfood);

