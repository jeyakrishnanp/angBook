'use strict';

book.factory('URLFeed', function(Feed) {

	/* URL Feed function and its prototype */
	function URLFeed(id, url) {

		Feed.call(this, id, 'URL');
		this.url = url;
	}

	URLFeed.prototype = Object.create(Feed.prototype);
	URLFeed.prototype.getFeed = function() {
		return this.url;
	}

	return URLFeed;
});
