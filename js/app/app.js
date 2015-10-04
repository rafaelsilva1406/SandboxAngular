/**
 *
 */
define(function (require){
	'use strict';

	var angular = require("angular"),
	routes = require("routes"),
	service = require("service");
	require("ui.router");
	require("LocalStorageModule");
	require("angularLoadingBar");
	require("pascalprecht.translate");
	require("angularTranslateLoader");
	require("login");
	require("home");
	require("qa");
	var a = angular.module('app',['ui.router','app.login','app.home','app.qa','LocalStorageModule','cfp.loadingBar','pascalprecht.translate'])
		.service('appService',service)
		.config(function($translateProvider,$httpProvider,localStorageServiceProvider,cfpLoadingBarProvider) {
			$translateProvider.useStaticFilesLoader({
				prefix: 'languages/',
				suffix: '.json'
			});
			$translateProvider.preferredLanguage('en');
			$translateProvider.useSanitizeValueStrategy('escape');
			$httpProvider.defaults.useXDomain = true;
			delete $httpProvider.defaults.headers.common['X-Requested-With'];
			localStorageServiceProvider.setStorageType('sessionStorage');
			cfpLoadingBarProvider.includeSpinner = true;
			cfpLoadingBarProvider.latencyThreshold = 1000;
			cfpLoadingBarProvider.spinnerTemplate = '<img src="img/loader.gif" class="img-responsive" alt="Loader">';
		})
		.config(routes)
		.run(function ($templateCache, $http, cfpLoadingBar,appService, $location) {
			if(appService.isUserActive()){
            	$location.path( "/home" );
            };

			cfpLoadingBar.start();
			$http.get('view/partial/messages.html')
			.then(function(response) {
				$templateCache.put('formErrorMessages', response.data);
				cfpLoadingBar.complete();
			});
		});
  return a;
});