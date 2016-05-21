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

						// Call the callback if present
						if(scope.dropFn) {
							scope.dropFn( {id: itemId} );
						}
						return false;
					},
					false
				);

			}
		}
	});
})();