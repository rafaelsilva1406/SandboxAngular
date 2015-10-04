/**
 *
 */
define(function(require){
	'use strict';
	var h = require('./qaModule');

	function widgetDefinitions(){
		return [
		    {
		    	name: 'fluid',
		    	//templateUrl: 'js/app/qa/widgetTemplate.html',
		    	directive: 'wtFluid',
		    	size: {
		    		width: '50%',
		    		height: '250px'
		    	}
		    }
		];
	}
	return h.factory('widgetDefinitions',widgetDefinitions);
});