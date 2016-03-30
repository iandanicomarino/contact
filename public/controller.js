var myApp=angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope, $http){
	console.log("Hello World from Controller");
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
		number: "111-1111"
	};

	var contactlist = [person1, person2, person3];
	$scope.contactlist = contactlist;
}]);