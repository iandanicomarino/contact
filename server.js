var express = require ('express');
var app = express();

app.use(express.static(__dirname+"/public"));

//app.get is processing $http.get() from controller.js
app.get('/contactlist', function (req,res){
	console.log("i received a get");
	
	person1 ={
		name:"ian marino",
		email:"nekomarino",
		number: "111-1111"
	};
	person2 ={
		name:"ian marino",
		email:"nekomarino",
		number: "111-1111"
	};
	person3 ={
		name:"ian marino",
		email:"nekomarino",
		number: "222-1111"
	};

	//console.log(person1);
	var contactlist = [];
	contactlist.push(person1);
	contactlist.push(person2);
	contactlist.push(person3);
	//console.log(contactlist);
	res.json(contactlist);//send back data to controller as respond
});
app.listen(1234);
console.log("server running");