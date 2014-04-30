(function() {
  'use strict';

  angular.module('controllers')
      .controller('NewbornCaloriesController', ['$scope', 'newbornFormulas', controller]);

  function controller($scope, Formulas) {

    $scope.person = {
      nourishment: 'breast',
      weight: 0,
      ree: 0
    };

    $scope.$watchCollection('[person.weight, person.nourishment]', function(newValues, oldValues){
      var result;

      if ($scope.person.nourishment == 'breast') {
        result = Formulas.reeBreast($scope.person.weight);
      } else {
        result = Formulas.reeSubstitute($scope.person.weight);
      }

      $scope.person.ree = result;
    });
  }

})();
