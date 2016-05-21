;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('mockDataService', ['$q', 'callingModel', 'orgModel', function($q, callingModel, orgModel) {
		var orgList = [];

		var bishopricCallingList = [
			callingModel.create(1, 'Bishop', 1),
			callingModel.create(2, '1st Councilor', 1),
			callingModel.create(3, '2nd Councilor', 1),
			callingModel.create(4, 'Executive Secretary', 1),
			callingModel.create(5, 'Ward Clerk', 1),
			callingModel.create(6, 'Finance Clerk', 1),
			callingModel.create(7, 'Assistant Ward Clerk', 1)
		];
		var orgBishopric = orgModel.create(1000, 'Bishopric', bishopricCallingList);

		var youngMenCallingList = [
			callingModel.create(10, 'President', 1),
			callingModel.create(11, '1st Councilor', 1),
			callingModel.create(12, '2nd Councilor', 1),
			callingModel.create(13, 'Secretary', 1)
		];
		var youngMenOrg = orgModel.create(2000, 'Young Men', youngMenCallingList);

		var scoutsCallingList = [
			callingModel.create(20, 'Committee Chair', 1),
			callingModel.create(21, 'Scout Master', 1),
			callingModel.create(22, 'Assist Scout Master', 1),
			callingModel.create(23, 'Advancement', 1)
		];
		var scoutsOrg = orgModel.create(3000, 'Scounts', scoutsCallingList);

		var youngWomenCallingList = [
			callingModel.create(30, 'President', 1),
			callingModel.create(31, '1st Councilor', 1),
			callingModel.create(32, '2nd Councilor', 1),
			callingModel.create(33, 'Secretary', 1)
		];
		var youngWomenOrg = orgModel.create(4000, 'Young Women', youngWomenCallingList);

		var primaryCallingList = [
			callingModel.create(40, 'President', 1),
			callingModel.create(41, '1st Councilor', 1),
			callingModel.create(42, '2nd Councilor', 1),
			callingModel.create(43, 'Secretary', 1)
		];
		var primaryOrg = orgModel.create(5000, 'Primary', primaryCallingList);

		var sundaySchoolCallingList = [
			callingModel.create(50, 'President', 1),
			callingModel.create(51, '1st Councilor', 1),
			callingModel.create(52, '2nd Councilor', 1),
			callingModel.create(53, 'Secretary', 1)
		];
		var sundaySchoolOrg = orgModel.create(6000, 'Sunday School', sundaySchoolCallingList);

		var eldersQuorumCallingList = [
			callingModel.create(60, 'President', 1),
			callingModel.create(61, '1st Councilor', 1),
			callingModel.create(62, '2nd Councilor', 1),
			callingModel.create(63, 'Secretary', 1)
		];
		var eldersQuorumOrg = orgModel.create(7000, 'Elders Quorum', eldersQuorumCallingList);

		var highPriestsCallingList = [
			callingModel.create(70, 'President', 1),
			callingModel.create(71, '1st Councilor', 1),
			callingModel.create(72, '2nd Councilor', 1),
			callingModel.create(73, 'Secretary', 1)
		];
		var highPriestsOrg = orgModel.create(8000, 'High Priests', highPriestsCallingList);

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
