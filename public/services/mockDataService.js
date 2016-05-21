;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('mockDataService', ['$q', 'callingModel', 'orgModel', function($q, callingModel, orgModel) {
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

		var youngMenCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var youngMenOrg = orgModel.create('Young Men', youngMenCallingList);

		var scoutsCallingList = [
			callingModel.create('Committee Chair', 1),
			callingModel.create('Scout Master', 1),
			callingModel.create('Assist Scout Master', 1),
			callingModel.create('Advancement', 1)
		];
		var scoutsOrg = orgModel.create('Scounts', scoutsCallingList);

		var youngWomenCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var youngWomenOrg = orgModel.create('Young Women', youngWomenCallingList);

		var primaryCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var primaryOrg = orgModel.create('Primary', primaryCallingList);

		var sundaySchoolCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var sundaySchoolOrg = orgModel.create('Sunday School', sundaySchoolCallingList);

		var eldersQuorumCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var eldersQuorumOrg = orgModel.create('Elders Quorum', eldersQuorumCallingList);

		var highPriestsCallingList = [
			callingModel.create('President', 1),
			callingModel.create('1st Councilor', 1),
			callingModel.create('2nd Councilor', 1),
			callingModel.create('Secretary', 1)
		];
		var highPriestsOrg = orgModel.create('High Priests', highPriestsCallingList);

		orgList.push(orgBishopric);
		orgList.push(youngMenOrg);
		orgList.push(scoutsOrg);
		orgList.push(youngWomenOrg);
		orgList.push(primaryOrg);
		orgList.push(sundaySchoolOrg);
		orgList.push(eldersQuorumOrg);
		orgList.push(highPriestsOrg);


		// Put the data into a 2 dimensional array to easier rendering
		function prepareData(orgList) {
			var grid = [ [],[],[],[],[],[] ];
			for(var i=0; i < orgList.length; i++) {
				if(i < 6) {
					grid[i].push(orgList[i]);
				} else if(i >= 6 && i < 12) {
					grid[i-6].push(orgList[i]);
				} else if(i >= 12 && i < 18) {
					grid[i-12].push(orgList[i]);
				} else if(i >= 18 && i < 24) {
					grid[i-18].push(orgList[i]);
				} else if(i >= 24 && i < 30) {
					grid[i-24].push(orgList[i]);
				} else if(i >= 30 && i < 36) {
					grid[i-30].push(orgList[i]);
				} else if(i >= 36 && i < 42) {
					grid[i-36].push(orgList[i]);
				} else if(i >= 42 && i < 48) {
					grid[i-42].push(orgList[i]);
				}
			}
			return grid;
		}

		return {
			getOrganizationGrid: function() {
				var deferred = $q.defer();

				deferred.resolve( prepareData(orgList) );

				return deferred.promise;
			}
		};
	}]);
})();
