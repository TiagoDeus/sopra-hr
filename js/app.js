var app = angular.module('App', ['ngRoute']);
app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'homeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/worker/:worker_id', {
      controller: 'workerController',
      templateUrl: 'views/worker.html' 
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});
