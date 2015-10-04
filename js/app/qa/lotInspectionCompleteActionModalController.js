/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");

	function lotInspectionCompleteActionModalController($rootScope,$scope,$modalInstance){
		if($rootScope.rowObject == undefined){
			$modalInstance.dismiss('cancel');
		}

		$scope.date = $rootScope.rowObject.DATE;
		$scope.growerId = $rootScope.rowObject.GROWERID;
		$scope.growerName = $rootScope.rowObject.GROWERNAME;
		$scope.lotId = $rootScope.rowObject.LOTID;
		$scope.binCount = $rootScope.rowObject.BINCOUNT;
		$scope.submit = function(){
			alert("Data will be sent to database.");
		};
		$scope.cancel = function () {
        	$modalInstance.dismiss('cancel');
        };
	}

	return h.controller("lotInspectionCompleteActionModalController",lotInspectionCompleteActionModalController);
});