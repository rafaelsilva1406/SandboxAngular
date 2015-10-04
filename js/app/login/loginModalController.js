/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./loginModule");

	function loginModalController($scope, appService, $modalInstance, responseMessage, $location){
		if(appService.isUserActive()){
        	$location.path("/qa");
        }

		$scope.modalTitle = "Login";
        $scope.modalBody = responseMessage;
        $scope.cancel = function () {
        	$modalInstance.dismiss('cancel');
        };
	}

	return h.controller("loginModalController", loginModalController);
});