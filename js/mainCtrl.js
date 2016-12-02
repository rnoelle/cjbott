angular.module('cjbott')
  .controller('mainCtrl', function ($scope, $state) {
    $scope.getClass = function (path) {
      return ($state.includes(path)) ? 'active' : '';
    }
  })
