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