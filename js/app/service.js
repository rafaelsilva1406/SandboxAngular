/**
 *
 */
'use strict';
define(['angular','model'],function (angular,model) {
	function handleError(obj)
	{
		if (obj.status == 0) {
			return "Not able to connect to API.";
		}
		return obj.status + " : " + obj.statusText + " - " + obj.data.httpResponse.statusMessage;
	}

	function service($http, $location,localStorageService) {
		this.permission = function() {
			return $http.get("db/permissions.json")
				.then(
					function(response){
						model.permission.setPermission(response.data.data);
						return response;
					},
					function(response){
						handleError(response);
					}
				);
		};
		this.getPermission = function(){
			return model.permission.getPermission();
		};
		this.user = function(){
			return model.user;
		};
		this.isUserActive = function(){

			if(model.user.getUser() != undefined && model.permission.getPermission() != undefined && model.userRole.getRole() != undefined){
				return true;
			}

			return false;
		};
		this.role = function(){
			return $http.get("db/userrole.json")
			.then(
				function(response){
					model.userRole.setRole(response.data.data);
					return response;
				},
				function(response){
					handleError(response);
				}
			);
		};
		this.getRole = function(){
			return model.userRole.getRole();
		};
	}
	service.$inject=['$http', '$location'];
	return service;
});