
book.service("FeedsService", function() {

	/* Feed function and its prototype */
	var Feed = function(id, type) {
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

	/* Text Feed function and its prototype */
	var TextFeed = function(id, text) {

		this.text = text;
		Feed.call(this, id, 'TEXT');
	}

	TextFeed.prototype = Object.create(Feed.prototype);
	TextFeed.prototype.getFeed = function() {
		return this.text;
	}

	/* URL Feed function and its prototype */
	var URLFeed = function(id, url) {

		this.url = url;
		Feed.call(this, id, 'URL');
	}

	URLFeed.prototype = Object.create(Feed.prototype);
	URLFeed.prototype.getFeed = function() {
		return this.url;
	}

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
	
		feed._id = feeds.length + 1;
		feed.type
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
