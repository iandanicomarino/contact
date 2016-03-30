var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http', function($scope, $http){
	console.log("Hello World from Controller");
	var refresh = function (){
	$http.get('/contactlist').then(function(res){
		console.log("i got data");
		$scope.contactlist=res.data; //importante ung date NEKO! xD
	});
	};

	$http.get('/contactlist').then(function(res){
		console.log("i got data");
		$scope.contactlist=res.data; //importante ung date NEKO! xD
	});
	//handles button clicks
	$scope.adduser = function(){
		console.log($scope.contact);
		delete $scope.contact._id;
		$http.post('/adduser',$scope.contact).then(function(res){
			$scope.contactlist=res.data;
		});
		refresh();
	};

	$scope.deleteuser = function(id)
	{
		console.log('/deleteuser/'+id);
		$http.delete('/deleteuser/'+id).then(function(res){
			$scope.contactlist=res.data;
		});
		refresh();
	}

	$scope.edit = function(id)
	{

		console.log(id);
		$http.post('/edituser/'+id).then(function(res){

			console.log($scope.contact);
			console.log(res.data);
			$scope.contact=res.data;
			
		});
		console.log("bago ref");
		refresh();
	};
	$scope.update= function(id)
	{
		console.log($scope.contact.id);
		$http.post('/updateuser/'+$scope.contact.id,$scope.contact).then(function(res){

			$scope.contactlist=res.data;
		});

	};

	//$scope.contactlist = contactlist;
}]);