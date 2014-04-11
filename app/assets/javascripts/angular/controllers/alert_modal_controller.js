(function() {

  'use strict';

  angular.module('controllers')
      .controller('AboutModalCtrl', ['$modalInstance', '$scope', 'message', controller]);

  function controller($modalInstance, $scope, message) {
    $scope.message = message;

    $scope.ok = function () {
      $modalInstance.close($scope.message);
    };

  }
})();

