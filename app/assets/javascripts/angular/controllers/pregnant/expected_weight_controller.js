(function() {
  'use strict';

  angular.module('controllers')
      .controller('PregnantExpectedWeightController', ['$scope', 'pregnantFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.person = {
      height: 0,
      numberOfWeeks: 0,
      weightBeforePregnancy: 0,
      bmi: 0
    };

    $scope.$watchCollection('[person.height, person.numberOfWeeks, person.weightBeforePregnancy]', function(newValues, oldValues){
      var result;
      $scope.person.bmi = Formulas.bmi($scope.person.height, $scope.person.weightBeforePregnancy);

      $scope.result = Formulas.PeIMCpgEg($scope.person.bmi, $scope.person.numberOfWeeks, $scope.person.weightBeforePregnancy);
    });
  }

})();
