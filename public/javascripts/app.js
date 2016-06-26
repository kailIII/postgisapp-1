angular.module('nodeTodo', [])

.controller('mainController', function($scope, $http) {

    $scope.formData = {};
    $scope.todoData = {};

    // Get all todos
    $http.get('http://localhost:3000/api/v1/todos')
        .success(function(data) {
            $scope.todoData = data;
            console.log(data);
        })
        .error(function(error) {
            console.log('Error: ' + error);
        });
        
    $http.post('http://localhost:3000/api/v1/todos', $scope.formData)
    .success(function(data) {
        $scope.formData = {};
        $scope.todoData = data;
        console.log(data);
    })
    .error(function(error) {
        console.log('Error: ' + error);
    });

    // Delete a todo
    $http.delete('http://localhost:3000/api/v1/todos/' + todoID)
        .success(function(data) {
            $scope.todoData = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});
