(function() {

  'use strict';

  angular.module('controllers')
      .controller('IndexController', ['$scope', controller]);

  function controller($scope) {
    $scope.title = 'such nutriments';

  }
})();
