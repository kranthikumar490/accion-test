var app = angular.module('accion', []);

app.controller('tableCtrl', function ($scope, $rootScope, $http) {

    $scope.orderByField = "id";
    $scope.reverse = false;
    $scope.isResponseSuccess = false;

    $scope.clickHandler = function(field){
        $scope.orderByField = field;
        $scope.reverse = !$scope.reverse;
    }
    $http.get("http://jsonplaceholder.typicode.com/posts ")
    .then(function(response) {
        $scope.tableContent = response.data;
        $scope.isResponseSuccess = true;
    });
});