 /**
 *
 */
define(function (require){
	'use strict';
	var h = require("./loginModule");

    function loginController($scope,$location,appService,loginService,cfpLoadingBar,localStorageService,$modal,promiseTracker) {
    	var $modalInstance = {},
        $promise = {},
        user = appService.user();
		$scope.isUserActive = appService.isUserActive();
		$scope.isDisabled = false;
		$scope.domainList = [];
        $scope.responseMessage = '';
        $scope.progress = promiseTracker();
		cfpLoadingBar.start();

		loginService.getDomain()
        .then(function (data) {
        	if (typeof data === 'string' || data instanceof String) {
        		$scope.responseMessage = data;
        		$modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'view/partial/messageModal.html',
                    controller: 'loginModalController',
                    size: 'lg',
                    resolve: {
                        responseMessage: function () {
                            return $scope.responseMessage;
                        }
                    }
                });
            } else {
                $scope.domainList.push(data[0]);
                $scope.domainSelected = data[0];
            }
           cfpLoadingBar.complete();
        });

		$scope.submit = function (user) {
			cfpLoadingBar.start();
			if ($scope.loginForm.$valid) {
				 user.domain = $scope.domainSelected.name;
				 $promise = loginService.auth(user)
                    .then(function (data) {

                        if (typeof data === 'string' || data instanceof String) {
                        	$scope.responseMessage = data;
                            cfpLoadingBar.complete();

                            $modalInstance = $modal.open({
                                animation: true,
                                templateUrl: 'view/partial/messageModal.html',
                                controller: 'loginModalController',
                                size: 'lg',
                                resolve: {
                                    responseMessage: function () {
                                        return $scope.responseMessage;
                                    }
                                }
                            });
                        }else {
                        	$promise = {};
                        	$promise = appService.permission()
        	                .then(function (data) {
        	                	 if (typeof data === 'string' || data instanceof String) {
 	                                $scope.responseMessage = data;
 	                            }else {
 	                            	$promise = {};
 	                            	$promise = appService.role()
	            	                .then(function (data) {
	            	                	 if (typeof data === 'string' || data instanceof String) {
	     	                                $scope.responseMessage = data;
	     	                            }else {
	     	                            	$scope.user = {};
			                                $scope.loginForm.$setPristine();
			                                $scope.loginForm.$setValidity();
			                                $scope.loginForm.$setUntouched();
			                                $scope.responseMessage = "Login Successful!";
			                                cfpLoadingBar.complete();

				                            $modalInstance = $modal.open({
				                                animation: true,
				                                templateUrl: 'view/partial/messageModal.html',
				                                controller: 'loginModalController',
				                                size: 'lg',
				                                resolve: {
				                                    responseMessage: function () {
				                                        return $scope.responseMessage;
				                                    }
				                                }
				                            });
	     	                            }
	            	                });
 	                            }
        	                });
                        }
                    });
                $scope.progress.addPromise($promise);
			}
		};
    }

    return h.controller("loginController", loginController);
});