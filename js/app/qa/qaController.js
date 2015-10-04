/**
 *
 */
define(function (require){
	'use strict';
	var h = require("./qaModule");
	function qaController($rootScope,$scope,appService,qaService,$modal,cfpLoadingBar,$filter){
		if($rootScope.rowObject == undefined){
			$rootScope.rowObject = {};
		}
		var $modalInstance = {},
		$translate = $filter('translate'),
		th1 = $translate('LOTINSPECTIONTABLEDATE'),
		th2 = $translate('LOTINSPECTIONTABLEGROWERID'),
		th3 = $translate('LOTINSPECTIONTABLEGROWERNAME'),
		th4 = $translate('LOTINSPECTIONTABLELOTID'),
		th5 = $translate('LOTINSPECTIONTABLEBINCOUNT');
		/*
		 *Reminder: Use this service as get to create json local file
		 *
		 * qaService.getLotInspection()
		.then(function(data){*/
			var table = $('#lotInspectionTable').DataTable( {
				ajax: {
			        url: 'db/lotInspection.json',
			        dataSrc: 'data'
			    },
			    columns: [
			        {"title": th1,data:'DATE'},
			        {"title": th2,data:'GROWERID'},
			        {"title": th3,data:'GROWERNAME'},
			        {"title": th4,data:'LOTID'},
			        {"title": th5,data:'BINCOUNT'}
			    ],
			    paging: true
			} );

			$('#lotInspectionTable tbody').on('click ','tr',function (){
		        var data = table.row( this ).data();
		        $rootScope.rowObject = data;
		        $modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'js/app/qa/lotInspectionActionModal.html',
                    controller: 'lotInspectionActionModalController',
                    size: 'lg'
                    /*resolve: {
                        rowObject: function () {
                            return data;
                        }
                    }*/
                });
		    } );
		//});
	}
	return h.controller("qaController",qaController);
});