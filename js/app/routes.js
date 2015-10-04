/**
 *
 */
'use strict';
define([],function () {
	function routes($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/login');

			$stateProvider
			.state('login',{
			      url: '/login',
			      views: {
			    	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			    	  "full": {
			              templateUrl: "js/app/login/login.html",
			              controller: 'loginController',
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
			})
			.state('logout', {
		          url: '/logout',
		          views: {
		        	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			    	  "full": {
			              templateUrl: "js/app/login/logout.html",
			              controller: 'logoutController'
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
		     })
			.state('home',{
			      url: '/home',
			      data: {
			    	  permissions: {
			    		  only: ['worker'],
			    		  except: ['anonymous'],
			    		  redirectTo: 'login'
			    	  }
			      },
			      views: {
		        	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			    	  "": {
			              templateUrl: "js/app/home/home.html",
			              controller: 'homeController'
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
			})
			.state('qa',{
			      url: '/qa',
			      data: {
			    	  permissions: {
			    		  only: ['worker'],
			    		  except: ['anonymous'],
			    		  redirectTo: 'login'
			    	  }
			      },
			      views: {
		        	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			          "nav":{
			        	  templateUrl: "js/app/qa/nav.html"
			          },
			    	  "": {
			              templateUrl: "js/app/qa/qa.html",
			              controller: 'qaController'
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
			})
			.state('binsForLot',{
			      url: '/binsForLot',
			      data: {
			    	  permissions: {
			    		  only: ['worker'],
			    		  except: ['anonymous'],
			    		  redirectTo: 'login'
			    	  }
			      },
			      views: {
		        	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			          "nav":{
			        	  templateUrl: "js/app/qa/nav.html"
			          },
			    	  "": {
			              templateUrl: "js/app/qa/binsForLot.html",
			              controller: 'binsForLotController'
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
			})
			.state('dryMatter',{
			      url: '/dryMatter',
			      data: {
			    	  permissions: {
			    		  only: ['worker'],
			    		  except: ['anonymous'],
			    		  redirectTo: 'login'
			    	  }
			      },
			      views: {
		        	  "header":{
			        	  templateUrl: "view/partial/header.html"
			          },
			          "nav":{
			        	  templateUrl: "js/app/qa/nav.html"
			          },
			    	  "": {
			              templateUrl: "js/app/qa/dryMatter.html",
			              controller: 'dryMatterController'
			          },
			          "footer":{
			        	  templateUrl: "view/partial/footer.html"
			          }
			      }
			});

	}
	routes.$inject=['$stateProvider','$urlRouterProvider'];
	return routes;
});