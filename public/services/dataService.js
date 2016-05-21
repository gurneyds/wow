;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('dataService', ['mockDataService', function(mockDataService) {


		return {
			getOrganizationGrid: function() { return mockDataService.getOrganizationGrid(); },
			moveOrganization: function(dataGrid, orgId, row, col, isBelow) {
				alert('Called moveOrganization with orgId:' + orgId + " row=" + row + ' col=' + col + ' isBelow=' + isBelow);
			}
		};
	}]);
})();
