app.factory('worker', ['$http', function($http) { 
  return $http.get('http://localhost:3000/worker')
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);