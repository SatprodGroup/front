app.factory('Music', function($http, $q){

    var music = {

        music : false,

        getMusic : function(){
            var deferred = $q.defer();
            if (music.music !== false){
                deferred.resolve(music.music);
            }else{
                $http({method: 'GET', url: './albums.json'}).
                    success(function(data, status, headers, config) {
                        music.music = data;
                        deferred.resolve(music.music);
                    }).
                    error(function(data, status, headers, config) {
                        deferred.reject('Network Problem!!');
                    });
            } 
            return deferred.promise;
        }
    };
    return music;

});

app.controller('MusicCtrl', function($scope,Music){

    $scope.loading = true;
    $scope.music = Music.getMusic().then(function(music){
        $scope.music = music;
        $scope.loading = false;

    }, function(msg){
        $scope.music = [{
                    "content" : msg,
                    "date" : " Network Issue"
                }]
    });


});