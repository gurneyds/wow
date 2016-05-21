;(function() {
	'use strict';
	var app = angular.module('wow-app');

	app.directive('droppable', function() {
		return {
			scope: {
				dropFn: '&' // callback function
			},
			link: function(scope, element) {
				// again we need the native object
				var el = element[0];

				el.addEventListener(
					'dragover',
					function(e) {
						e.dataTransfer.dropEffect = 'move';
						// allows us to drop
						if (e.preventDefault) e.preventDefault();
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragenter',
					function(e) {
						this.classList.add('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'dragleave',
					function(e) {
						this.classList.remove('over');
						return false;
					},
					false
				);

				el.addEventListener(
					'drop',
					function(e) {
						// Stops some browsers from redirecting.
						if (e.stopPropagation) e.stopPropagation();

						this.classList.remove('over');

						var itemId = e.dataTransfer.getData('Text');

						// call the drop passed drop function - it is necessary to have this $apply so that the digest
						// cycle will run again and update the ui with the modified data
						scope.$apply(function(scope) {
							var fn = scope.dropFn;
							if ('undefined' !== typeof fn) {
								fn( {id: itemId} );
							}
						});
						return false;
					},
					false
				);

			}
		}
	});
})();