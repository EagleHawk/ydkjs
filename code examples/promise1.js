var pinkypromise = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Hi dad, i kept my promise");
	}, 1000);
});

var didhomework = new Promise(function(resolve, reject) {
	setTimeout(function() {
		resolve("Hi dad, i did my homework");
	}, 1000);
});

var getupearly = function(p){
	return new Promise(function(resolve, reject) {
	setTimeout(function() {
		 console.log(p)
		resolve("Hi dad, i got up early");
	}, 2000);
})};


//Simple Resolve & Reject
pinkypromise
	.then(function(res) {
		console.log(res);
		console.log("Good Job");
	})
	.catch(function(res) {
		console.error("Please keep your promise");
	})

//Promise chaining
pinkypromise
	.then(function(res){
		return getupearly(res);
	})
	.then(function(res){
		console.log(res);
		console.log("Good Job");
	})

//Promise chaining
pinkypromise
	.then(function(res) {
		console.log(res);
		return Promise.resolve("Good Job");
	})
	.then(function(res) {
		console.log(res)
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				reject("Opps Dad, i broked my promise")
			}, 500)
		})
	})
	.then(function(res) {
		console.log("Please keep your promise .. fingers crossed")
	})
	.catch(function(err) {
		console.error(err);
		console.log("Ok try next time.")
	})

 
//Multiple Promise
Promise.all([pinkypromise, didhomework])
	.then(function(data) {
		console.table(data);
	})
	.catch(function(err) {
		console.error(err)
	})


//Async Await
async function asyncawait()
{
	try
	{
		var promise1 = await pinkypromise;
		var promise2 = await didhomework;
		var promise3 = await getupearly(promise1+"\n"+promise2);
		console.log(promise3);

	}
	catch(e)
	{
		console.error(e);
	}
}
asyncawait();
