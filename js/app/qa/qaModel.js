/**
 *
 */
define(function (require) {
	'use strict';
	var angular = require("angular"),
		base64 = require("base64");
	return{
		lotInspection:{
			setLotInspection: function(o){
				var currentLotInspection = {};
				currentLotInspection.date = o.DATE;
				currentLotInspection.growerId = o.GROWERID;
				currentLotInspection.growerName = o.GROWERNAME;
				currentLotInspection.lotId = o.LOTID;
				currentLotInspection.binCount = o.BINCOUNT;
				return currentLotInspection;
			}
		}
	};
});