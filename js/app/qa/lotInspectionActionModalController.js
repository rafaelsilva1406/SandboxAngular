/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");

	function loginModalController($rootScope,$scope, $modalInstance, $modal){
		if($rootScope.rowObject == undefined){
			$modalInstance.dismiss('cancel');
		}

		$scope.date = $rootScope.rowObject.DATE;
		$scope.growerId = $rootScope.rowObject.GROWERID;
		$scope.growerName = $rootScope.rowObject.GROWERNAME;
		$scope.lotId = $rootScope.rowObject.LOTID;
		$scope.binCount = $rootScope.rowObject.BINCOUNT;
		$scope.imageModal = function(){
			$modalInstance.dismiss('cancel');
			$modalInstance = $modal.open({
                animation: true,
                templateUrl: 'js/app/qa/lotInspectionImageActionModal.html',
                controller: 'lotInspectionImageActionModalController',
                size: 'lg'
                /*resolve: {
                    rowObject: function () {
                        return data;
                    }
                }*/
            });
		};
		$scope.completeInspectionModal = function(){
			$modalInstance.dismiss('cancel');
			$modalInstance = $modal.open({
                animation: true,
                templateUrl: 'js/app/qa/lotInspectionCompleteActionModal.html',
                controller: 'lotInspectionCompleteActionModalController',
                size: 'lg'
                /*resolve: {
                    rowObject: function () {
                        return data;
                    }
                }*/
            });
		};
		$scope.cancel = function () {
        	$modalInstance.dismiss('cancel');
        };

	}

	return h.controller("lotInspectionActionModalController", loginModalController);
});