'use strict';

book.controller('FeedCtrl', ['$scope', 'FeedsService', function($scope, feedService) {

	angular.extend($scope, {

		feeds : feedService.getFeeds(),

		createFeed : function() {
			feedService.createFeed($scope.feedValue);
			$scope.feedValue = "";
			$scope.feedData.feedCount = $scope.feeds.length;
		},

		deleteFeed : function(id) {
			feedService.deleteFeed(id);
			$scope.feedData.feedCount = $scope.feeds.length;
		}
	});
 
}]);
