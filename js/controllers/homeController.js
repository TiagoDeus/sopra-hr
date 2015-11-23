app.controller('homeController', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:3000/api/worker').then(function(response) {
  	$scope.workers = response.data.worker;
  }); 
}]);