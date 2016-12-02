angular.module('cjbott')
  .controller('tabCtrl', function($scope, $state) {
    $state.transitionTo('home.welcome')
  })
