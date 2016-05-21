;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('orgModel', [function() {
		var orgModel = function(id, name, callingList) {
			this.id = id;
			this.name = name;
			this.callingList = callingList;
		};

		function create(id, name, callingList) {
			return new orgModel(id, name, callingList);
		}

		return {
			create: create
		};
	}]);
})();
