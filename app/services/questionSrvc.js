angular.module('trendingTrivia').service('questionSrvc', function($http) {
  
  // secure connection!
  let baseUrl = 'https://practiceapi.devmountain.com';
  // question is an object { question, animal, difficulty, options: {1, 2, 3, 4}, correct_answer:, date_entered: { type, default} }
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