/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./homeModule");

    function homeController($scope,appService) {
    	$scope.isUserActive = appService.isUserActive();
    }

    return h.controller("homeController", homeController);
});