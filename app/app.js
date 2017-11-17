angular.module('triviaTrends', [ui.router]).config( function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('home', {
        url:'/',
        templateUrl: 'app/'})
    // .state('questionlist', {
    //     url:'/questionlist',
    //     templateUrl:'app/'
    // }).state('questioneditor', {
    //     url:'/questioneditor',
    //     templateUrl:'app/'
    // })

    $urlRouterProvider
    .otherwise('/')

})