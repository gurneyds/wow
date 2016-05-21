;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.factory('callingModel', [function() {
		var calling = function(id, name, positions) {
			this.id = id;
			this.name = name;
			this.positions = positions;
		};

		function create(id, name, positions) {
			return new calling(id, name, positions);
		}

		return {
			create: create
		};
	}]);
})();
