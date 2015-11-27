app.controller('homeController', ['$scope', 'worker', function($scope, worker) {
  worker.success(function(data){
  	$scope.workers = data.worker;
  });
}]);