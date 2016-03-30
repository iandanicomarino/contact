var myApp=angular.module('myApp',[]);

myApp.controller('AppCtrl',['$scope','$http', function($scope, $http){
	console.log("Hello World from Controller");

	$http.get('/contactlist').then(function(res){
		console.log("i got data");
		$scope.contactlist=res.data; //importante ung date NEKO! xD
	});

	$scope.adduser = function(){
		console.log($scope.contact)

		$http.post('/adduser',$scope.contact).then(function(res){
			$scope.contactlist=res.data;
		});
	};
	//$scope.contactlist = contactlist;
}]);