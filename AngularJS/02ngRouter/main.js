angular.module("myApp",["ngRoute"])

.config(["$routeProvider",function($routeProvider){
     $routeProvider
         .when('1',{
             templateUrl:'/1.html',
             controller:"mainCtrl"
         })
         .when('2',{
             templateUrl:'/2.html',
             controller:"mainCtrl"
         })
         .when('3',{
             templateUrl:'/3.html',
             controller:"mainCtrl"
         })
         .when('/',{
             templateUrl:'/index.html',
             controller:'mainCtrl'
         })
         .otherwise({
             redirectTo:'/'
         });
}])
    .controller("mainCtrl",function($scope){

    })
   /* .controller("index1Ctrl",function($scope){

    })
    .controller("index2Ctrl",function($scope){

    })
    .controller("index3Ctrl",function($scope){

    })*/


