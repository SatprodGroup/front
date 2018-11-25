/* global app */

app.factory('SendMessage', function ($http, $q) {
  var messageReturn = {

    messageReturn: false,
    SendMessage: function (data) {
      var deferred = $q.defer();

      $http({
        url: 'https://aspfbgp8j3.execute-api.eu-west-1.amazonaws.com/dev/message',
        method: 'POST',
        data: data
      }).then(function successCallback (response) {
        messageReturn.messageReturn = response;
        deferred.resolve(messageReturn.messageReturn);
      }, function errorCallback (response) {
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
