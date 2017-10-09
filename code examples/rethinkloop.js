var people = [ 
{name:"Veer, Prabhu", age:2,gender:"M" ,occupation:"dancer"},
{name:"Vikas, Prabhu", age:34,gender:"M",occupation:"boss"},
{name:"Mohini, Memane", age:25,gender:"F",occupation:"coder"},
{name:"Rahul, Nair", age:3000,gender:"M",occupation:"robot"},
{name:"Devendra, Walnaj", age:25,gender:"M",occupation:"scientist"}
];

//Filter for people eligible for voting
var voters = people.filter(function(person) {
	return person.age > 18 ? true : false;
})
console.log("Voters");
console.table(voters);

//Get full names with occupation
var descriptions = people.map(function(person)
{
	return person.name +" is a "+person.occupation;
});
console.log("Descriptions");
console.table(descriptions);


//Sort by age or each person
var youngtoolder=people.sort(function(last,next){
	return (last.age>next.age)? 1:-1;
})
console.log("Younger");
console.table(youngtoolder)


//get the total age
var totalage = people.reduce(function(total, person) {
	return total + person.age
}, 0)
console.log("Total Age:" + totalage);
