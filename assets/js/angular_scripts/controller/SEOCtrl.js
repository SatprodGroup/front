app.controller('SEOCtrl', function($scope,$rootScope,$location){

	$rootScope.image_url = "http://www.satprod.net/assets/images/logo-favicon.png";

	$scope.navHome = function(){
		$rootScope.url = "http://www.satprod.net/";
		$rootScope.keywords = "satprod,development,dévelopement,web,VoIP,telephone,electronic,cisco,switch,IPtv,router,routeur,internet,fiber,optical,fibre,optique,electronique,iot,internet of things,embeded,mesh,wireless,rack,server,serveur,cloud,aws,ruby,ruby on rail, ror, node, nodejs, grunt, gruntjs, angular, angularjs, mongo, mongodb, express, expressjs, requirejs, php, laravel, cakephp, zend, zendframework, postgresql, objective-c, mobile, c, c++";
		$rootScope.description = "Satprod Group is a young but powerful company that can offer you the best tools you need for your IT solution";
	}

	$scope.navContact = function(){
		$rootScope.url = "http://www.satprod.net/#!/contact";
		$rootScope.keywords = "satprod,satprod-group, satprod group, contact,support,assistance,customer service,service client";
		$rootScope.description = "Satprod Group gives an huge importance to the customers relationships. We'll always be there for you!";
	}

	$scope.navCompany = function(){
		$rootScope.url = "http://www.satprod.net/#!/company";
		$rootScope.keywords = "satprod,satprod-group, satprod group, team, about, who we are, company, stock";
		$rootScope.description = "Satprod Group is a strong company with a good reputation, we are versatile and we can adapt to your needs.";
	}

	$scope.navReferences = function(){
		$rootScope.url = "http://www.satprod.net/#!/references";
		$rootScope.keywords = "satprod, customer, customers, references, reference, recomendations";
		$rootScope.description = "Satprod Group comes with a bunch of references and experiences that will help us to succeed our chalenges with you.";
	}

	$scope.navEngineering = function(){
		$rootScope.url = "http://www.satprod.net/#!/engineering";
		$rootScope.keywords = "satprod,satprod-group,web,VoIP,telephone,electronic,cisco,switch,IPtv,router,routeur,internet,fiber,optical,fibre,optique,electronique,iot,internet of things,embeded,mesh,wireless,rack,server,serveur,cloud,aws";
		$rootScope.description = "Satprod Group has the ability to design, prototype and develop your engineering solutions.";
	}

	$scope.navDevelopment = function(){
		$rootScope.url = "http://www.satprod.net/#!/development";
		$rootScope.keywords = "satprod,development,dévelopement,web,electronic,electronique,embeded,mesh,cloud,aws,ruby,ruby on rail, ror, node, nodejs, grunt, gruntjs, angular, angularjs, mongo, mongodb, express, expressjs, requirejs, php, laravel, cakephp, zend, zendframework, postgresql, objective-c, mobile, c, c++";
		$rootScope.description = "Over the years, Satprod Group develops many solutions for their clients.";
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