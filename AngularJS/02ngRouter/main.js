angular.module("myApp",["ngRoute"])

.config(["$routeProvider",function($routeProvider){
     $routeProvider
         .when('/1',{
             templateUrl:'test/1.html'

         })
         .when('/2',{
             templateUrl:'test/2.html'

         })
         .when('/3',{
             templateUrl:'test/3.html'

         })
         .when('/',{
             templateUrl:'/index.html',
             controller:'mainCtrl'
         })
         .otherwise({
             redirectTo:'/'
         });

}])
    .controller("mainCtrl",['$scope',function($scope){

    }])


