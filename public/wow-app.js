;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['dataService', function(dataService) {
		var control = this;
		var dataGrid;

		dataService.getOrganizationGrid().then(
			function(data) {
				dataGrid = data;
			},
			function() {
				// TODO - error occurred, show something...
			}
		);

		control.getOrganizationListAtCol = function(col) {
			return dataGrid[col];
		};

		control.dropped = function(id, row, column, isBelow) {
			dataService.moveOrganization(dataGrid, id, row, column, isBelow);
		};

	}]);
})();
