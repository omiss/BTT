'use strict';


projet
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('homepage', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('Compte', {
        url: '/newAccount',
        templateUrl: 'views/newAccount.html'
      });
    $urlRouterProvider.otherwise('/newAccount');
  })
;
