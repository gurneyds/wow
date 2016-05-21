;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['dataService', function(dataService) {
		var control = this;
		
		dataService.getOrganizationGrid().then(
			function(dataGrid) {
				control.grid = dataGrid
			},
			function() {
				// TODO - error occurred, show something...
			}
		);

		control.dropped = function(id, row, column, isBelow) {
			control.grid = dataService.moveOrganization(control.grid, id, row, column, isBelow);
		};

	}]);
})();
