/**
 *
 */
define(function(require) {
	'use strict';
	var h = require("./qaModule");

	function wtFluid(){
		return {
			restrict: 'A',
		    replace: true,
		    templateUrl: 'js/app/qa/widgetTemplate.html',
		    scope: true,
		    controller: function ($scope) {
		    	$scope.$on('widgetResized', function (event, size) {
		    		$scope.width = size.width || $scope.width;
		        	$scope.height = size.height || $scope.height;
		    	});
		    }
		};
	}
	return h.directive("wtFluid",wtFluid);
});