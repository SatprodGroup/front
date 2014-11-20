app.controller('SEOCtrl', function($scope,$rootScope,$location){

	$rootScope.image_url = "http://www.satprod.net/assets/images/logo-favicon.png";

	$scope.navHome = function(){
		$rootScope.url = "http://www.satprod.net/";
		$rootScope.description = 0;
	}

	$scope.navContact = function(){
		$rootScope.url = "http://www.satprod.net/#!/contact";
		$rootScope.description = 0;
	}

	$scope.navCompany = function(){
		$rootScope.url = "http://www.satprod.net/#!/company";
		$rootScope.description = 0;
	}

	$scope.navReferences = function(){
		$rootScope.url = "http://www.satprod.net/#!/references";
		$rootScope.description = 0;
	}

	$scope.navEngineering = function(){
		$rootScope.url = "http://www.satprod.net/#!/engineering";
		$rootScope.description = 0;
	}

	$scope.navDevelopment = function(){
		$rootScope.url = "http://www.satprod.net/#!/development";
		$rootScope.description = 0;
	}

	switch($location.path()) {
	    case '/':
			$scope.navHome();
	        break;
	   	case '/contact':
			$scope.navContact();
	        break;
	    case '/company':
			$scope.navCompany();
	        break;
	    case '/references':
			$scope.navReferences();
	        break;
	    case '/engineering':
			$scope.navEngineering();
	        break;
	    case '/development':
			$scope.navDevelopment();
	        break;
	    default:
			$scope.navHome();
	}
});