app.factory('UniqueReference', function($http, $q){

    var references = {

        references : false,

        getReferences : function(){
            var deferred = $q.defer();
            if (references.references !== false){
                deferred.resolve(references.references);
            }else{
                $http({method: 'GET', url: './data/references.json'}).
                    success(function(data, status, headers, config) {
                        references.references = data;
                        deferred.resolve(references.references);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject('Network Problem!!');
                    });
            } 
            return deferred.promise;
        }
    };
    return references;

});

app.controller('UniqueReferenceCtrl', function($scope,$rootScope,References){

    $('html,body').animate({scrollTop: 0});
    $rootScope.header = "References"; 

    $scope.loading = true;
    $scope.references = References.getReferences().then(function(references){
        $scope.references = references;
        $scope.loading = false;
        setTimeout(function(){_masonry()},500);

    }, function(msg){
        $scope.references = [{
                    "title" : msg,
                    "date" : " Network Issue"
                }];
        setTimeout(function(){_masonry()},500);
    });
});