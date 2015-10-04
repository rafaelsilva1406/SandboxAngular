/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");
	function dryMatterController($rootScope,$scope,appService,$location,$modal,$filter){
		if($rootScope.rowObject == undefined){
			$location.path("/qa/lotInspection");
		}
		var $modalInstance = {},
		$translate = $filter('translate'),
		th1 = $translate('DRYMATTERTABLESEQUENCE'),
		th2 = $translate('DRYMATTERTABLEWEIGHTUNIT'),
		th3 = $translate('DRYMATTERTABLEFRUITWEIGHT'),
		th4 = $translate('DRYMATTERTABLEPAPERWEIGHT'),
		th5 = $translate('DRYMATTERTABLEWETWEIGHT'),
		th6 = $translate('DRYMATTERTABLEDRYWEIGHT'),
		th7 = $translate('DRYMATTERTABLEDRYMATTER');
		$scope.oneAtATime = true;
		/*
		 *Reminder: Use this service as get to create json local file
		 *
		 * qaService.getdryMatterLot()
		.then(function(data){*/
			var table = $('#dryMatterLotTable').DataTable( {
				ajax: {
			        url: 'db/dryMatterLot.json',
			        dataSrc: 'data'
			    },
			    columns: [
			        {"title": th1,data: 'SEQUENCE'},
			        {"title": th2,data: 'WEIGHTUNIT'},
			        {"title": th3,data: 'FRUITWEIGHT'},
			        {"title": th4,data: 'PAPERWEIGHT'},
			        {"title": th5,data: 'WETWEIGHT'},
			        {"title": th6,data: 'DRYWEIGHT'},
			        {"title": th7,data: 'DRYMATTER'},
			    ],
			    paging: true
			} );

			$('#dryMatterLotTable tbody').on('click ','tr',function (){
		        var data = table.row( this ).data();
		        $rootScope.rowChildObject = data;
		        $modalInstance = $modal.open({
	                animation: true,
	                templateUrl: 'js/app/qa/editDryMatterModal.html',
	                controller: 'editDryMatterModalController',
	                size: 'lg'
	                /*resolve: {
	                    rowObject: function () {
	                        return data;
	                    }
	                }*/
	            });
		    });
		//});

		$scope.date = $rootScope.rowObject.DATE;
		$scope.growerId = $rootScope.rowObject.GROWERID;
		$scope.growerName = $rootScope.rowObject.GROWERNAME;
		$scope.lotId = $rootScope.rowObject.LOTID;
		$scope.binCount = $rootScope.rowObject.BINCOUNT;

		$scope.add = function(){
			$modalInstance = $modal.open({
                animation: true,
                templateUrl: 'js/app/qa/addDryMatterModal.html',
                controller: 'addDryMatterModalController',
                size: 'lg'
                /*resolve: {
                    rowObject: function () {
                        return data;
                    }
                }*/
            });
		}
	}
	return h.controller("dryMatterController",dryMatterController);
});