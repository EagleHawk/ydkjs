var people = [ 
{name:"Veer, Prabhu", age:2,gender:"M" ,occupation:"dancer"},
{name:"Vikas, Prabhu", age:34,gender:"M",occupation:"boss"},
{name:"Mohini, Memane", age:25,gender:"F",occupation:"coder"},
{name:"Rahul, Nair", age:3000,gender:"M",occupation:"robot"},
{name:"Devendra, Walnaj", age:25,gender:"M",occupation:"scientist"}
];

//Get people with gender male
var Males = people.filter(function(person) {
	return person.gender == 'M' && person.occupation=='scientist' ? true : false;
})
console.log("Males");
console.table(Males);

//Sort by last name
var newpeople = people
				.map(function(person)
				{
					var lastname = 
					person.lastname=person.name.split(', ')[1,]
					return person;
				})
				.sort(function(last,next){
					return last.lastname>next.lastname?1:-1;
				})
console.log("New people");
console.table(newpeople);


//Count number of males and females
var census = people.reduce(function(gender,person){
			if(!gender[person.gender])
				gender[person.gender]=0
			gender[person.gender]++
			return gender;
},{})
console.table(census);


