/* global app, $, _masonry */

app.factory('References', function ($http, $q) {
  var references = {
    references: false,
    getReferences: function () {
      var deferred = $q.defer();
      if (references.references !== false) {
        deferred.resolve(references.references);
      } else {
        $http({method: 'GET', url: '/api/references'})
          .success(function (data, status, headers, config) {
            references.references = data;
            deferred.resolve(references.references);
          })
          .error(function (data, status, headers, config) {
            deferred.reject('Network Problem!!');
          });
      }
      return deferred.promise;
    }
  };
  return references;
});

app.factory('UniqueReferences', function ($http, $q) {
  var reference = {
    reference: false,
    getReference: function (slug) {
      var deferred = $q.defer();
      $http({method: 'GET', url: '/api/references/' + slug})
        .success(function (data, status, headers, config) {
          reference.reference = data;
          deferred.resolve(reference.reference);
        })
        .error(function (data, status, headers, config) {
          deferred.reject('Network Problem!!');
        });
      return deferred.promise;
    }
  };
  return reference;
});

app.controller('ReferencesCtrl', function ($scope, $rootScope, References) {
  $('html,body')
    .animate({scrollTop: 0});
  $rootScope.header = 'References';

  $scope.loading = true;

  References
    .getReferences()
    .then(function (references) {
      $scope.references = references;
      $scope.loading = false;
      setTimeout(function () {
        _masonry();
      }, 500);
    }, function (msg) {
      $scope.references = [{
        'title': msg,
        'date': 'Network Issue'
      }];
      setTimeout(function () {
        _masonry();
      }, 500);
    });
});

app.controller('UniqueReferenceCtrl', function ($scope, $rootScope, $routeParams, UniqueReferences) {
  $('html,body').animate({scrollTop: 0});

  $rootScope.header = 'References';
  $scope.loading = true;

  UniqueReferences
    .getReference($routeParams.refId)
    .then(function (reference) {
      $scope.reference = reference;
      $scope.loading = false;
    }, function (msg) {
      $scope.reference = [{
        'title': msg,
        'date': 'Network Issue'
      }];
    });
});
