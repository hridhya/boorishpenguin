angular.module('boorishpenguin', [
  'boorish.services',
  'boorish.users',
  'boorish.ask',
  'boorish.questions',
  'boorish.answers',
  'boorish.auth',
  'boorish.mymodal',
  'ngRoute'
  ])

.config(function ($routeProvider, $sceProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/questions/questions.html',
      controller: 'questionsController'
    })
    .when('/ask', {
      templateUrl: 'app/ask/ask.html',
      controller: 'askController'
    })
    .when('/questions', {
      templateUrl: 'app/questions/questions.html',
      controller: 'questionsController'
    })
    .when('/questions/:id', {
      templateUrl: 'app/answers/answers.html',
      controller: 'answersController'
    })
    .when('/users', {
      templateUrl: 'app/users/users.html',
      controller: 'UsersController'
    })
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/sessionq', {
      templateUrl: 'app/sessionQ/sessionQ.html',
      controller: 'ModalCtrl',
      // controller: 'SessionQController'
      // controllerAs: 'main'
    })
    .otherwise({
      routeTo: '/signin'
    })

  $sceProvider.enabled(false);
});
