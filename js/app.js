angular.module('cjbott', ['ui.router']);

angular.module('cjbott')
  .config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.when('', '/')
    //   .otherwise('error');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'mainCtrl',
        templateUrl: './js/home/home.html'
      })
      .state('home.welcome', {
        templateUrl: './js/welcome/welcome.html',
        controller: 'welcomeCtrl'
      })
      .state('home.pub', {
        templateUrl: './js/pub/pub.html',
        controller: 'pubCtrl'
      })
      .state('home.cv', {
        templateUrl: './js/cv/cv.html',
        controller: 'cvCtrl'
      })

      .state('error', {
        url: '/404',
        templateUrl: ''
      })


  })
