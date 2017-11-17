angular.module('triviaTrends').service('questionSrvc', function($http) {
  let baseUrl = 'https://practiceapi.devmountain.com';
  
  this.createQuestion = function(question) {
    return $http.post(baseUrl + '/api/trivia/questions', question);
  }

  this.deleteQuestion = function(id) {
    return $http.delete(baseUrl + '/api/trivia/questions/:id');
  }

  this.editQuestion = function(id) {
    return $http.put(baseUrl + '/api/trivia/questions/:id');
  }

  this.getQuestions = function(page=0, animal) {
    if (!animal) {
      return $http.get(baseUrl + '/api/trivia/questions?page=' + page);
    } else {
      return $http.get(baseUrl + 'api/trivia/questions?page=' + page + '&animal=' + animal);
    }
  }
  
  this.getQuestionByDifficulty = function(difficulty) {
    return $http.get(baseUrl + '/api/trivia/questions/difficulty/:difficulty');
  }
})