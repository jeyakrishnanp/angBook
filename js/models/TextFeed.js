'use strict';

book.factory('TextFeed', ['Feed', function(feed) {

	/* Text Feed function and its prototype */
	function TextFeed(text) {

		this.text = text;
		this.type = "TEXT";
	}
			
	return TextFeed;
}]);