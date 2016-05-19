;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('callingModel', [function() {
		var calling = function(name, positions) {
			this.name = name;
			this.positions = positions;
		};

		function create(name, positions) {
			return new calling(name, positions);
		}

		return {
			create: create
		};
	}]);
})();
