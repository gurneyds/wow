;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('mockDataService', ['callingModel', 'orgModel', function(callingModel, orgModel) {
		var orgList = [];

		var bishopricCallingList = [
			callingModel.create('Bishop', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Executive Secretary', 1),
			callingModel.create('Ward Clerk', 1),
			callingModel.create('Finance Clerk', 1),
			callingModel.create('Assistant Ward Clerk', 1)
		];
		var orgBishopric = orgModel.create('Bishopric', bishopricCallingList);

		orgList.push(orgBishopric);

		return {
			getOrganizationList: function() {
				return orgList;
			}
		};
	}]);
})();
