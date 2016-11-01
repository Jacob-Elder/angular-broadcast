angular.module('SearchBroadcastApp', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>',
  })
  .state('post', {
    url: '/post/:id',
    template: '<post></post>',
  })
  .state('edit-post', {
    url: '/post/:id/edit',
    template: '<post-edit></post-edit>',
  });

  $locationProvider.html5Mode(true);
}]);
