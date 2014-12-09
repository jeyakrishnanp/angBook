'use strict';

book.factory('Profile', [function() {
	
	var Profile = function(data) {

		angular.extend(this, {

			firstName : null,
			lastName : null,
			eMailId : null
		});

		angular.extend(this, data);
	};

	Profile.prototype = Object.create(User);
}]);
