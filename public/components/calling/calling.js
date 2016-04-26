;(function() {
	'use strict';
	var app = angular.module('wow-app');
	app.directive('calling', [function() {
		return {
			restrict: 'E',
			templateUrl: 'components/calling/calling.html',
            scope: {
                callingInfo: '='
            },
			controller: ['$scope', function($scope) {
				var foo = "bar";
				var bar = foo;
            }]
		};
	}]);
})();
