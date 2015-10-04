/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./loginModule");

	function logoutController($scope, $location, localStorageService, $modal){
		var $modalInstance = {};
		localStorageService.clearAll();
		sessionStorage.clear();
        $modalInstance = $modal.open({
            animation: true,
            templateUrl: 'js/app/login/logoutModal.html',
            controller: 'logoutModalController',
            size: 'lg',
        });
	}

	return h.controller("logoutController", logoutController);
});