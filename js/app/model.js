/**
 *
 */
define(['angular','base64'],function (angular,base64) {
	'use strict';
	return{
		user: {
			setUser: function(o){
				var currentUser = {};
				currentUser.authId = o.authIdentity;
				currentUser.authenticated = o.authenticated;
				sessionStorage.user = base64.encode(angular.toJson(currentUser));
			},
			getUser: function(){
				if(sessionStorage.user == undefined){
					return undefined;
				}else{
					return JSON.parse(base64.decode(sessionStorage.user));
				}
			}
		},
		permission: {
			setPermission: function(o){
				var currentPermission = {};
				currentPermission.worker = o.worker;
				currentPermission.manager = o.manager;
				sessionStorage.permission = base64.encode(angular.toJson(currentPermission));
			},
			getPermission: function(){
				if(sessionStorage.permission == undefined){
					return undefined;
				}else{
					return JSON.parse(base64.decode(sessionStorage.permission));
				}
			}
		},
		userRole: {
			setRole: function(o){
				var currentRole = {};
				currentRole.role = o.role;
				currentRole.enable = o.enable;
				sessionStorage.role = base64.encode(angular.toJson(currentRole));
			},
			getRole: function(){
				if(sessionStorage.role == undefined){
					return undefined;
				}else{
					return JSON.parse(base64.decode(sessionStorage.role));
				}
			}
		}
	};
});