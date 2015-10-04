/**
 *
 */
'use strict';
define(['angular','base64'],function (angular,base64) {
	return{
		domain: function (o){
			var obj = {};
			obj.id = o.id;
			obj.name = o.name;
			return obj;
		}
	};
});