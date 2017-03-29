/**
 *
 * Created by Jason on 2016/9/6.
 */
(function(angular){
    'use strict';
    var app = angular.module('myApp',[]);
    app.controller('FirstController',['$scope','$window','$timeout',function($scope,$window,$timeout){
        $scope.tragle = true;
        $scope.name='jc';
        $scope.person=[{name:'A',age:13,address:'AAAAA'},{name:'B',age:22,address:'BBBBBB'},{name:'C',age:52,address:'CCCCCC'}];
        $scope.person.click=function(name){
            $window.alert(name);
        }
    }]);
})(angular);