/**
 *
 */
define(function(require) {
	'use strict';
    var h = require("./loginModule"),
        model = require("model"),
        loginModel = require("loginModel");

    function handleError(obj) {
		if (obj.status == 0) {
			return "Not able to connect to API.";
		}
		return obj.status + " : " + obj.statusText + " - " + obj.data.httpResponse.statusMessage;
	}

    function loginService($http, $location,localStorageService) {
    	this.getDomain = function (){
			return $http.get("db/domain.json")
				.then(
					function (response) {
						var domainItems = [];
						$.each(response.data.data, function (i, o) {
							domainItems.push(loginModel.domain(o));
						});
						return domainItems;
					},
					function (response) {
						handleError(response);
					}
				);
		};
		this.auth = function (post) {
			var json = {},
				req = {};
			json.data = {};
			json.data.credentials = {};
			json.data.credentials.userEmail = post.username + "@" + post.domain + ".com";
			json.data.credentials.userPassword = post.password;

			return $http({
				method: 'POST',
				url:'http://192.168.1.48:10080/appstack/public/v1/rest-login',
				data: json,
				timeout: 2000
			}).then(
				function (response) {
					model.user.setUser(response.data.data);
					return response;
				},
				function (response) {
					return handleError(response);
				}
			);
		};
    }

    return h.service("loginService", loginService);
});