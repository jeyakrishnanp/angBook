'use strict';

book.factory('URLFeed', ['Feed', function(feed) {

	/* URL Feed function and its prototype */
	function URLFeed(url) {

		this.url = url;
		this.type = "URL";
	}

	return URLFeed;
}]);