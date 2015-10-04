/**
 *
 */
define(function(require) {
	'use strict';
	var h = require("./qaModule"),
		m = require("./qaModel");

	function handleError(obj){
		 if (obj.status == 0) {
			 return "Not able to connect to API.";
		}
		return obj.status + " : " + obj.statusText + " - " + obj.data.httpResponse.statusMessage;
	}

	function qaService($http,$location,localStorageService){
		this.getLotInspection = function(){
			return $http.get("db/lotInspection.json")
			.then(
					function(response){
						var lotInspectionItems = [];

						$.each(response.data.data, function(i,o){
							lotInspectionItems.push(m.lotInspection.setLotInspection(o));
						});

						return lotInspectionItems;
					},
					function(response){
						handleError(response);
					}
			);
		};
	}

	return h.service("qaService", qaService);
});