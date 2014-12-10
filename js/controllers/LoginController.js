'use strict';

book.controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, user) {

	angular.extend($scope, {

		isAuthSuccess : false,

		validationError : "",

		authenticate : function() {

			angular.extend(user, $scope.user);
			if (!user.isValidUser()) {
				$scope.validationError = "Username can not be empty";
			} else if (!user.isValidPassword()) {
				$scope.validationError = "Passward can not be empty";
			} else if (user.name === "admin" && user.password === "admin") {
				$location.path('/home');
				$scope.isAuthSuccess = true;
				$scope.menuData.selected = 1;
				$scope.userData.isIn = true;
				$scope.userData.name = user.name;
			} else {
				$scope.validationError = "Please enter valid Username and password.";
			}
		},

		logout : function() {
			$scope.isAuthSuccess = false;
			$location.path('/login');
			$scope.userData.isIn = false;
			$scope.userData.name = "";
			$scope.menuData.selected = 1;
			$scope.validationError = "";
			angular.extend($scope.user, {name:"", password: ""});
		}
	});
}]);
