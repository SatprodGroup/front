/* global angular, $ */

var app = angular.module('app', [
  'ngRoute',
  'ngAnimate',
  'ngSanitize'
]);

var path = localStorage.getItem('path');
if(path) {
  console.log(path);
  localStorage.removeItem('path');
  window.history.pushState('', '', '/' + path);
}

app.config(function ($animateProvider) {
  $animateProvider.classNameFilter(/angular-animate/);
});

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {templateUrl: '/partials/home.html', controller: HomeCtrl})
    .when('/company', {templateUrl: '/partials/company.html', controller: CompanyCtrl})
    .when('/references', {templateUrl: '/partials/references.html'})
    .when('/references/:refId', {templateUrl: '/partials/references_single.html', controller: 'UniqueReferenceCtrl'})
    .when('/engineering', {templateUrl: '/partials/engineering.html', controller: EngineeringCtrl})
    .when('/development', {templateUrl: '/partials/development.html', controller: DevelopmentCtrl})
    .when('/contact', {templateUrl: '/partials/contact.html', controller: ContactCtrl})
    .otherwise({redirectTo: '/'});
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  delete $httpProvider.defaults.headers.common['Content-Type'];
  delete $httpProvider.defaults.headers.common['Accept-Ranges'];
});

app.config(['$locationProvider', function ($locationProvider) {
  $locationProvider.hashPrefix('!');
}]);

function HomeCtrl ($rootScope, $http) {
  $('html,body').animate({scrollTop: 0});
  $rootScope.header = 'Welcome';
}

function CompanyCtrl ($rootScope, $http) {
  $('html,body').animate({scrollTop: 0});
  $rootScope.header = 'The Company';
}

function EngineeringCtrl ($rootScope, $http) {
  $('html,body').animate({scrollTop: 0});
  $rootScope.header = 'Engineering';
}

function DevelopmentCtrl ($rootScope, $http) {
  $('html,body').animate({scrollTop: 0});
  $rootScope.header = 'Development';
}

function ContactCtrl ($rootScope, $http) {
  $('html,body').animate({scrollTop: 0});
  $rootScope.header = 'Contact';
}
