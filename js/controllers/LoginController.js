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
				$location.path('/mybook');
				$scope.isAuthSuccess = true;
			} else {
				$scope.validationError = "Please enter valid Username and password.";
			}
		}
	});
}]);
