// File: app/scripts/main.js 'use strict';

(function(){
	'use strict';
	angular.module('blog',['ngRoute','blog.controllers','blog.services'])
		.config(function ($locationProvider, $routeProvider){

			$locationProvider.html5Mode(true);

			$routeProvider
				.when('/', {
					templateUrl: 'views/post-list.tpl.html',
					controller: 'PostListCtrl',
					controllerAs: 'postlist'
				})
				.when('/new', {
					templateUrl: 'views/post-create.tpl.html',
					controller: 'PostCreateCtrl',
					controllerAs: 'postcreate'
				})
				.when('/:postId', {
					templateUrl: 'views/post-detail.tpl.html',
					controller: 'PostDetailCtrl',
					controllerAs: 'postdetail'
				});
		});
})();