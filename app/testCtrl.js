angular.module('trendingTrivia').controller('testCtrl', function($scope, questionSrvc) {
  $scope.questions = questionSrvc.getQuestions();
})