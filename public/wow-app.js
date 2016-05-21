;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['mockDataService', function(mockDataService) {
		var control = this;
		
		mockDataService.getOrganizationGrid().then(
			function(dataGrid) {
				control.grid = dataGrid
			},
			function() {
				// TODO - error occurred, show something...
			}
		);

		control.dropped = function() {
			alert('Item dropped');
		};

	}]);
})();
