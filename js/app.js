'use strict';

var book = angular.module('angbook', ['ngRoute']);

book.config(function($routeProvider) {
	$routeProvider
		.when('/login', 
			{
				controller  : 'LoginCtrl',
				templateUrl : './templates/plain.html'
			})
		.when('/mybook',
			{
				controller  : 'FeedCtrl',
				templateUrl : './templates/feed.html'
			})
		.when('/profile',
			{
				controller  : 'ProfileCtrl',
				templateUrl : './templates/profile.html' 
			})
		.otherwise({ redirectTo : '/login' });
});
