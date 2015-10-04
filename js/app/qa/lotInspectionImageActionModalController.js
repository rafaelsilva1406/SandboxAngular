/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");

	function lotInspectionImageActionModalController($rootScope,$scope, $modalInstance){
		if($rootScope.rowObject == undefined){
			$modalInstance.dismiss('cancel');
		}

		$scope.date = $rootScope.rowObject.DATE;
		$scope.growerId = $rootScope.rowObject.GROWERID;
		$scope.growerName = $rootScope.rowObject.GROWERNAME;
		$scope.lotId = $rootScope.rowObject.LOTID;
		$scope.binCount = $rootScope.rowObject.BINCOUNT;
		$scope.submit = function (e,m,w){
			console.log(e);
			console.log(m);
			console.log(w);
		};
		$scope.success = function(e,m,w){
			console.log(e);
			console.log(m);
			console.log(w);
		};
		$scope.error = function(e,m,w){
			console.log(e);
			console.log(m);
			console.log(w);
		};
		$scope.cancel = function () {
        	$modalInstance.dismiss('cancel');
        };
	}

	return h.controller("lotInspectionImageActionModalController", lotInspectionImageActionModalController);
});