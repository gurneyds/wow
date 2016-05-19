;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('orgModel', [function() {
		var orgModel = function(name, callingList) {
			this.name = name;
			this.callingList = callingList;
		};

		function create(name, callingList) {
			return new orgModel(name, callingList);
		}

		return {
			create: create
		};
	}]);
})();
