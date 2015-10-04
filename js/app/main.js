/**
 *
 */
'use strict';

if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define({
	baseUrl: 'js/app',
	waitSeconds: 100,
	packages: ["login","home","qa"],
	paths: {
		'domReady': '../components/domReady',
		'jquery': '../components/jquery.min',
		'jquery-ui':'../components/jquery-ui.min',
		'angular': '../components/angular.min',
		'ui.router': '../components/angular-ui-router.min',
		'ngMessages':'../components/angular-messages.min',
		'ngAnimate':'../components/angular-animate.min',
		'LocalStorageModule': '../components/angular-local-storage.min',
		'ui.bootstrap':'../components/ui-bootstrap-tpls-0.13.4.min',
		'ui.bootstrap.showErrors':'../components/showErrors.min',
		'ajoslin.promise-tracker':'../components/promise-tracker',
		'angularLoadingBar':'../components/loading-bar.min',
		'dataTable':'../components/jquery.dataTables.min',
		'dataTableBootstrap':'../components/dataTables.bootstrap.min',
		'pascalprecht.translate':'../components/angular-translate.min',
		'angularTranslateLoader':'../components/angular-translate-loader-static-files.min',
		'angularPermission':'../components/angular-permission',
		'angularTouch':'../components/angular-touch.min',
		'ng-flow-standalone':'../components/ng-flow-standalone.min',
		'jquery.minicolors':'../components/jquery.minicolors.min',
		'minicolors':'../components/angular-minicolors',
		'angular-timer':'../components/angular-timer.min',
		'ui.sortable':'../components/sortable',
		'ui.dashboard':'../components/malhar-angular-dashboard',
		'underscore':'../components/underscore-min',
		'base64':'../components/base64.min',
		'app':'./app',
		'routes': './routes',
		'model': './model',
		'loginModel':'./login/loginModel',
		'service':'./service'
	},
	shim: {
		'jquery-ui':['jquery'],
		'dataTable':['jquery'],
		'dataTableBootstrap':['dataTable'],
		'angular': {
			deps:['jquery'],
			exports: 'angular',
		},
		'ui.router':['angular'],
		'ngMessages':['angular'],
		'ngAnimate':['angular'],
		'LocalStorageModule':['angular'],
		'ui.bootstrap':['angular'],
		'ui.bootstrap.showErrors':['angular'],
		'ajoslin.promise-tracker':['angular'],
		'angularLoadingBar':['angular'],
		'pascalprecht.translate':['angular'],
		'angularTranslateLoader':['angular','pascalprecht.translate'],
		'angularPermission':['angular','ui.router'],
		'angularTouch':['angular'],
		'ng-flow-standalone':['angular'],
		'jquery.minicolors':['jquery'],
		'minicolors':['angular','jquery.minicolors'],
		'angular-timer':['angular'],
		'ui.sortable':['angular','jquery','jquery-ui'],
		'ui.dashboard':['angular','ui.bootstrap','ui.sortable','jquery','jquery-ui','underscore'],
	}
});