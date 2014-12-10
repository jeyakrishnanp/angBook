'use strict';

book.controller('MenuCtrl', ['$scope', '$location', function($scope, $location) {

	angular.extend($scope, {

		menuClick : function(index) {
			$scope.menuData.selected = index;
			if (index == 1) {
				$location.path('/home');
			} else if (index == 2) {
				$location.path('/mybook');
			} else if (index == 3) {
				$location.path('/profile');
			}
		},

		isSelectedMenu : function(index) {
			return $scope.menuData.selected === index;
		}
	});
}]);
