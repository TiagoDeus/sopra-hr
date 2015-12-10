var app = angular.module('App', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'homeController', 
      templateUrl: 'views/home.html' 
    })
    .when('/worker', {
       controller: 'workersController',
       templateUrl: 'views/worker.html'
    })
    .when('/worker/:worker_id', {
      controller: 'workerController'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
