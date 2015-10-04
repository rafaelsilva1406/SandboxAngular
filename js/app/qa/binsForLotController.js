/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");
	function binsForLotController($rootScope,$scope,appService,qaService,$location,$modal,cfpLoadingBar,$filter,widgetDefinitions){
		if($rootScope.rowObject == undefined){
			$location.path("/qa/lotInspection");
		}
		var $modalInstance = {},
		$translate = $filter('translate'),
		table1th1 = $translate('BINSFORLOTTABLEBINID'),
		table1th2 = $translate('BINSFORLOTTABLEBINCOMPANY'),
		table2th1 = $translate('BINSFORLOTINSPECTIONTABLESEQUENCE'),
		table2th2 = $translate('BINSFORLOTINSPECTIONTABLEWEIGHT'),
		table2th3 = $translate('BINSFORLOTINSPECTIONTABLEGRADE'),
		table2th4 = $translate('BINSFORLOTINSPECTIONTABLECOLOR');
		$scope.date = $rootScope.rowObject.DATE;
		$scope.growerId = $rootScope.rowObject.GROWERID;
		$scope.growerName = $rootScope.rowObject.GROWERNAME;
		$scope.lotId = $rootScope.rowObject.LOTID;
		$scope.binCount = $rootScope.rowObject.BINCOUNT;
		$scope.oneAtATime = true;
		$scope.dashboardOptions = {
			widgetButtons: false,
			widgetDefinitions: widgetDefinitions,
		};
		console.log(widgetDefinitions);
		/*
		 *Reminder: Use this service as get to create json local file
		 *
		 * qaService.getbinsForLot()
		.then(function(data){*/

			var table = $('#binsForLotTable').DataTable( {
				ajax: {
			        url: 'db/binsForLot.json',
			        dataSrc: 'data'
			    },
			    columns: [
			        {"title": table1th1,data: 'BINID'},
			        {"title": table1th2,data: 'BINCOMPANY'}
			    ],
			    paging: true
			});
		//});
			/*
			 *Reminder: Use this service as get to create json local file
			 *
			 * qaService.getInspectionsTable()
			.then(function(data){*/
			var inspectionTable = $('#inspectionTables').DataTable({
				ajax: {
			        url: 'db/viewInspections.json',
			        dataSrc: 'data'
			    },
			    columns: [
			        {"title": table2th1,data: 'SEQUENCE' },
			        {"title": table2th2,data: 'WEIGHT' },
			        {"title": table2th3,data: 'GRADE' },
			        {"title": table2th4,data: 'COLOR' }
			    ],
			    paging: true
			});
			//});
		$scope.inputColorSettings = {
				control: 'wheel',
				theme: 'bootstrap',
				position: 'top right',
				defaultValue:'#05fc11'
		};
		$scope.submit = function(){
			alert("Data will be sent to database.");
		};
		$scope.inspectLot = function(){
			$modalInstance = $modal.open({
                animation: true,
                templateUrl: 'js/app/qa/inspectLotModal.html',
                controller: 'inspectLotModalController',
                size: 'lg'
                /*resolve: {
                    rowObject: function () {
                        return data;
                    }
                }*/
            });
		}
		 $scope.items = [];
	}
	return h.controller("binsForLotController",binsForLotController);
});