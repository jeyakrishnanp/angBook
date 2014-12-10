'use strict';

var book = angular.module('angBook', ['ngRoute']);

book.config(function($routeProvider) {
	$routeProvider
		.when('/login', 
			{
				controller  : 'LoginCtrl',
				templateUrl : './templates/plain.html'
			})
		.when('/home',
			{
				templateUrl : './templates/home.html'
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
