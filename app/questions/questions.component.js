angular.module('triviaTrends').component('questions', {

    templateUrl: 'app/questions/questionsTmpl.html',
    controllerAs: 'questionsCtrl',
    bindings: {
        searchAnimal: '@',
        difficulty: '@'
    },
    controller: function (questionSrvc) {
        questionSrvc.getQuestions().then(response => {
                console.log(response.data)
            this.allQuestions = response.data
            console.log(this.allQuestions)
        })
        this.difficulties = {
            "1": "Easy",
            "2": "Medium",
            "3": "Hard"
        }

    },
    function(questionSrvc, difficulty) {
        questionSrvc.getQuestionByDifficulty(difficulty).then(response => {
            console.log(response.data)
            this.questionDifficulty = response.data
        })

    }
})