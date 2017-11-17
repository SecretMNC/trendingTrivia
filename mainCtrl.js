angular.module('triviaTrends').controller('mainCtrl', function($scope, questionSrvc, $http) {
    console.log($scope.searchAnimal)

    // $scope.baseUrl = 'https://practiceapi.devmountain.com';
        $scope.searchAnimal = '';
        // $scope.getDifficulty = function(difficulty) {
        //      $http.get($scope.baseUrl + '/api/trivia/questions/difficulty/' + difficulty).then( response => {
        //         $scope.difficulty = response.data;
        //         console.log('mainCtrl', response.data);
        //      })
        //   };
    $scope.setDifficulty = function(difficulty) {
        $scope.difficulty = difficulty;
    },

    $scope.search = false;
    $scope.toggleSearch = function() {
        $scope.search = !$scope.search
    }
    $scope.modal = false;
    $scope.toggleModal = function() {
        $scope.modal = !$scope.modal;
    }
        
    })