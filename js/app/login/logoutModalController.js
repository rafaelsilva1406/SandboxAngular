/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./loginModule");

	function logoutModalController($scope,$modalInstance,$location,appService){
		$scope.modalTitle = "Logout";
        $scope.modalBody = "GoodBye.";
        $scope.redirect = function () {
            $modalInstance.dismiss('cancel');
            $location.path("/login");
        };
	}

	return h.controller("logoutModalController", logoutModalController);
});