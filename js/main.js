var website = angular.module('website', [])

website.config(function ($routeProvider){
	$routeProvider
	.when('/', 
		{
			controller: 'MainController',
			templateUrl: 'partials/home.html'
		})
	.when('/about', 
		{
			controller: 'MainController',
			templateUrl: 'partials/about.html'
		})
	.when('/contact', 
		{
			controller: 'MainController',
			templateUrl: 'partials/contact.html'
		})
	.otherwise(
		{
			redirectTo: '/'
		});
});

website.factory('PushPullFactory', function($http){
	return {
		getSections: function() {
			return $http.get('data/sections.php')
				.then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
		}
	}
});

website.factory('PullContentFactory', function($http){
	return {
		getSectionContent: function(index) {
			return $http.get('data/content_section.php', { params: index})
				.then(function(result) {
                    //resolve the promise as the data
                    return result.data;
                });
		}
	}
});

var controllers = {};
controllers.NavController = function($scope, PushPullFactory){
	$scope.sections = [];
	
	init();
	function init() {
		$scope.sections = PushPullFactory.getSections();
	}
};

controllers.MainController = function($scope, PullContentFactory){
	$scope.content_section = [];
	init();
	function init() {
		$scope.content_section = PullContentFactory.getSectionContent(1);
	}
};


website.controller(controllers);