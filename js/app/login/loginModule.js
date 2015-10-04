/**
 *
 */
define(function (require) {
	"use strict";
	var angular = require("angular"),
	service = require("service");
	require("angularLoadingBar");
	require("LocalStorageModule");
	require("ui.bootstrap");
	require("ajoslin.promise-tracker");
	require("ngAnimate");
	require("angularTouch");
	require("angular-timer");
	var a = angular.module('app.login', ['cfp.loadingBar','LocalStorageModule','ui.bootstrap','ajoslin.promise-tracker','ngAnimate','ngTouch','timer'])
	.service('appService',service);
	return a;
});