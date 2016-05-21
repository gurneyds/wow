;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['mockDataService', function(mockDataService) {
		var control = this;

		mockDataService.getOrganizationList().then(
			function(orgList) {
				control.organizationList = orgList;
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
