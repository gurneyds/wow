;(function() {
	'use strict';
	var app = angular.module('wow-app', []);

	app.controller('mainController', ['mockDataService', function(mockDataService) {
		var control = this;

		control.organizationList = mockDataService.getOrganizationList();

		control.dropped = function() {
			alert('Item dropped');
		};

	}]);
})();
