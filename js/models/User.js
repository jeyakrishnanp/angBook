'use strict';

book.factory('User', [function() {

	var User = {

		name : null,
		password : null,
		
		getName : function() {
			return this.name;
		},
		
		getPassword : function() {
			return this.password;
		},

		isValidUser : function() {
			return this.name != null && this.name != '';
		},

		isValidPassword : function() {
			return this.password != null && this.password != '';
		}
	};

	return User;
}]);
