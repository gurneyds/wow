;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['dataService', function(dataService) {
		var control = this;

		dataService.getOrganizationGrid().then(
			function(data) {
				control.dataGrid = data;
			},
			function() {
				// TODO - error occurred, show something...
			}
		);

		control.dropped = function(id, row, column, isBelow) {
			// TODO - this function changes the data grid in place - which isn't "functional" programming and should be changed
			dataService.moveOrganization(control.dataGrid, id, row, column, isBelow);
		};

	}]);
})();
