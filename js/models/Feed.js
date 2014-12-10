'use strict';

book.factory('Feed', [function() {

	/* Feed function and its prototype */
	function Feed(id, type) {
		this.id = id;
		this.type = type;
		this.date = new Date();
	}

	return Feed;
}]);