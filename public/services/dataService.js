;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('dataService', ['mockDataService', function(mockDataService) {


		return {
			getOrganizationGrid: function() { return mockDataService.getOrganizationGrid(); },
			moveOrganization: function(dataGrid, orgId, row, col, isBelow) {
				// Force the orgId to be an integer since it is passed as text
				orgId = parseInt(orgId);

				// Find the organization in question and remove it
				for(var iCol=0; iCol < dataGrid.length; iCol++) {
					for(var jRow=0; jRow < dataGrid[iCol].length; jRow++) {
						if(dataGrid[iCol][jRow].id === orgId) {
							// Remove it from the array
							var organization = dataGrid[iCol].splice(jRow, 1);

							// TODO - check to see if the drop position won't change and then do nothing

							// Insert the item into the new position
							if(isBelow) {
								dataGrid[col].splice(row+1, 0, organization[0]);
							} else {
								dataGrid[col].splice(row, 0, organization[0]);
							}
						}
					}
				}
			}
		};
	}]);
})();
