/**
 *
 */
define(function (require) {
    "use strict";
	var angular = require("angular"),
	service = require("service");

	require("angularLoadingBar");
	require("angularPermission");
	require("ui.bootstrap.showErrors");
    var a =  angular.module("app.home", ['cfp.loadingBar','permission','ui.bootstrap.showErrors'])
    .config(['showErrorsConfigProvider', function(showErrorsConfigProvider) {
		showErrorsConfigProvider.showSuccess(true);
	}])
	.service('appService',service)
	.run(function (Permission,appService){
		Permission
		.defineRole('anonymous', function (stateParams) {

			if(appService.isUserActive()){
				return true;
			}

	        return false;
	    })
	    .defineRole('worker', function (stateParams) {

	    	if(appService.isUserActive() && appService.getPermission().worker){
					return true;
	    	}

	        return false;
	    });
	});
    return a;
});