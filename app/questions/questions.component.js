angular.module('triviaTrends').component('questions', {

    templateUrl: 'app/questions/questionsTmpl.html',
    controllerAs: 'questionsCtrl',

    controller: function (questionSrvc) {
        questionSrvc.getQuestions().then(response => {
                console.log(response.data)
            this.allQuestions = response.data
        })
    }
})