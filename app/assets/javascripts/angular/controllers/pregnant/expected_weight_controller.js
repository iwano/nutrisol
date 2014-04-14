(function() {
  'use strict';

  angular.module('controllers')
      .controller('PregnantExpectedWeightController', ['$scope', 'pregnantFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.person = {
      age: 0,
      height: 0,
      weight: 0,
      numberOfWeeks: 0,
      weightBeforePregnancy: 0,
      bmi: 0
    };

    $scope.$watchCollection('[person.age, person.height, person.weight, person.numberOfWeeks, weightBeforePregnancy, bmi]', function(newValues, oldValues){
      var result;
      $scope.person.bmi = Formulas.bmi($scope.person.height, $scope.person.weight);

      $scope.result = Formulas.PeIMCpgEg($scope.person.bmi, $scope.person.numberOfWeeks, $scope.person.weightBeforePregnancy);
    });
  }

})();
