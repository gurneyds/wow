;(function() {
	'use strict';
	var app = angular.module('wow-app');
	app.directive('calling', [function() {
		return {
			restrict: 'E',
			templateUrl: 'components/calling/calling.html',
            scope: {
                name: '@',
                positionCount: '@'
            },
			controller: ['$scope', function($scope) {
                alert("calling directive");
            }]
		};
	}]);
})();
