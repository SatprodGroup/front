/* global app */

app.factory('SendMessage', function ($http, $q) {
  var messageReturn = {

    messageReturn: false,
    SendMessage: function (data) {
      var deferred = $q.defer();

      $http({
        url: '/api/sendemail',
        method: 'POST',
        data: data
      })
      .success(function (data, status, headers, config) {
        messageReturn.messageReturn = data;
        deferred.resolve(messageReturn.messageReturn);
      })
      .error(function (data, status, headers, config) {
        deferred.reject('Network Problem!!');
      });
      return deferred.promise;
    }
  };
  return messageReturn;
});

app.controller('ContactCtrl', [
  '$scope',
  'SendMessage',
  function ($scope, SendMessage) {
    $scope.send = function (data) {
      SendMessage.SendMessage(data).then(function (data) {
        $scope.confirm = true;
      }, function (msg) {
        $scope.error = true;
      });
    };

    $scope.reset = function () {
      $scope.data = {};
      $scope.confirm = false;
      $scope.error = false;
    };
  }]);
