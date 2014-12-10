'use strict';

book.service("FeedsService", function(URLFeed, TextFeed) {

	var feeds = [];

	/* create a feed */
	this.createFeed = function(feedValue) {	

		var feed;
		if(feedValue.length > 4 && 
			(feedValue.substring(0, 4).toUpperCase() == "HTTP" || 
			feedValue.substring(0,4).toUpperCase() == "HTTPS" || 
			feedValue.substring(0,3).toUpperCase() == "WWW")) {
	
			if(feedValue.substring(0, 3).toUpperCase() == "WWW") {
				feedValue ="http://" + feedValue;
			}
			feed = new URLFeed(feeds.length, feedValue);
		} else {
			feed = new TextFeed(feeds.length, feedValue);	
		}

		if (feedValue.length > 0) {
			addFeedService(feed);
		}
	};

	/* Delete a Feed */
	this.deleteFeed = function(id) {	
		deleteFeedService(id);
	};

	/* fetch all feeds */
	this.getFeeds = function() {
		return feeds;
	};

	/* Returning Functions and Immediate Invocation for feed +/- service */
	var addFeedService = feedService("+");
	
	var deleteFeedService = feedService("-");

	/* Feed service for +/- */
	function feedService(mode) {

		var result;

		if(mode === "+") {
	
			result = function(feed) {
				feeds.push(feed);			
			};
		} else if (mode === "-") {

			result = function(id) {

				for (var i = 0, len = feeds.length; i < len; i++) {

					if (id == feeds[i].id) {

						feeds.splice(i, 1);
						break;
					}
				}
			};
		} 
		return result;
	};
});
