"use strict";
angular.module('myApp',[]);
angular.module('myApp').controller('MainController', ['$scope', '$interval', function($scope, $interval){
    var items = ['bananas','apples','pears','cherries','peaches'];
    $scope.itemIndex = null;
    $scope.currentItem = '';
    $scope.getItem = function(){
        $scope.currentItem = items[$scope.itemIndex];
    };
    $interval(function() {
        $scope.itemIndex = Math.round(Math.random() * (items.length - 1));
        $scope.getItem();
    }, 2000);
}]);