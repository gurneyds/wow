;(function() {
	'use strict';
	var app = angular.module('wow-app', [])

	.controller('mainController', [function() {
		var control = this;

		control.orgInfo = {
		      orgName: 'Bishopric',
		      callings: [
		        {
		          name: 'Bishop',
		          positions: 1
		        },
		        {
		          name: '1st Councilor',
		          positions: 1
		        },
		        {
		          name: '2nd Councilor',
		          positions: 1
		        }
		      ]
		  };


	}]);
})();
