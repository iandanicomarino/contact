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
	//console.log("i received a get");
	
	db.contactlist.find(function (err,docs){
		////console.log(docs);
		res.json(docs);
	});
	////console.log(contactlist);
	//res.json(contactlist);//send back data to controller as respond
});

app.post('/edituser/:id', function (req,res){
	var id=req.params.id;
	//console.log(id);
	db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
		//console.log(docs);
		res.json(docs);
	});
});

app.post('/adduser',function (req,res){
	
	//console.log(req.body);
	db.contactlist.insert(req.body);
	db.contactlist.find(function (err,docs){
		res.json(docs);
	});
});

app.post('/updateuser/:id',function (req,res){
	
	var id = req.body._id;
	console.log(req.body);
	console.log(req.body._id);
	delete req.body._id;
	console.log("deleted"+req.body);
	db.contactlist.update({_id:mongojs.ObjectId(id)},req.body,{upsert:true});
	db.contactlist.find(function (err,docs){
		res.json(docs);
	});
});

app.delete('/deleteuser/:id',function (req,res){
	//console.log(req.params.id);
	var id=req.params.id;
	////console.log(id);
	db.contactlist.remove({_id:mongojs.ObjectId(id)});
	db.contactlist.find(function (err,docs){
		res.json(docs);
	});
});
app.listen(1234);
//console.log("server running");