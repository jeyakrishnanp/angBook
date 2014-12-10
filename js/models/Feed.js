'use strict';

book.factory('Feed', [function() {

	/* Feed function and its prototype */
	function Feed(id, type) {
		this.id = id;
		this.type = type;
		this.date = new Date();
	}

	Feed.prototype =  {
		getID: function(){
			return this.id;
		},
		getType: function() {
			return this.type;	
		},
		getDateTime: function() {
			return this.date;
		}
	};

	return Feed;
}]);