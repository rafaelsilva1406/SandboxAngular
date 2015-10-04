/**
 *
 */
define(function (require){
    "use strict";
    var angular = require("angular"),
    service = require("service");
    require("angularLoadingBar");
    require("angularPermission");
    require("dataTableBootstrap");
    require("ngAnimate");
    require("ng-flow-standalone");
    require("minicolors");
    require("ui.bootstrap");
    require("angularTouch");
    require("ui.dashboard");
    var a = angular.module("app.qa",['cfp.loadingBar','permission','ngAnimate','flow','minicolors','ui.bootstrap','ngTouch','ui.dashboard'])
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