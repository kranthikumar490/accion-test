var app = angular.module('accion', ['ngRoute']);

app.controller('tableCtrl', function ($scope, $rootScope, $http) {

    $scope.orderByField = "id";
    $scope.reverse = false;
    $scope.isResponseSuccess = false;
    $http.get("http://jsonplaceholder.typicode.com/posts ")
    .then(function(response) {
        $scope.tableContent = response.data;
        $scope.isResponseSuccess = true;
    });
});