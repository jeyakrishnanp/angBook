'use strict';

book.factory('TextFeed', function(Feed) {

	/* Text Feed function and its prototype */
	function TextFeed(id, text) {

		Feed.call(this, id, 'TEXT');
		this.text = text;
	}

	TextFeed.prototype = Object.create(Feed.prototype);
	TextFeed.prototype.getFeed = function() {
		return this.text;
	}

	return TextFeed;
});