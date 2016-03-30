var express = require ('express');
var app = express();

//mongo usage
var mongojs = require('mongojs');
var db=mongojs('contactlist',['contactlist']);

var bodyparser = require('body-parser'); //to parse the body in add.post()

//used to call the html using what folder it is in
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.json());
//app.get is processing $http.get() from controller.js
app.get('/contactlist', function (req,res){
	console.log("i received a get");
	
	db.contactlist.find(function (err,docs){
		//console.log(docs);
		res.json(docs);
	});
	//console.log(contactlist);
	//res.json(contactlist);//send back data to controller as respond
});

app.post('/adduser',function (req,res){
	
	console.log(req.body);
	db.contactlist.insert(req.body);
	db.contactlist.find(function (err,docs){
		res.json(docs);
	});
});
app.listen(1234);
console.log("server running");