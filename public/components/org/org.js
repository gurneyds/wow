;(function() {
	'use strict';
	var app = angular.module('wow-app');
	app.directive('org', [function() {
		return {
			restrict: 'E',
			templateUrl: 'components/org/org.html',
            scope: {
                orgInfo: '='
            },
			controller: ['$scope', function($scope) {
//                $scope.name = $scope.orgInfo.name;
//                $scope.callings = $scope.orgInfo.callings;
            }]
		};
	}]);
})();
