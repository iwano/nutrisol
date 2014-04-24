(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailurePredialysisCaloriesController', ['$scope', 'predialysisFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.caloriesValues = [30, 35, 40];
    $scope.proteinGrams = [0.8, 0.9, 1];

    $scope.person = {
      weightCaloriesValue: 30,
      weightProteinValue: 0.8,
      weightCalories: 0,
      weightProtein: 0,
      kcal: 0,
      protein: 0
    }

    $scope.$watchCollection('[person.weightCalories, person.weightProtein, person.weightCaloriesValue, person.weightProteinValue]', function(newValues, oldValues){
      $scope.person.kcal = Formulas.kcal($scope.person.weightCalories, $scope.person.weightCaloriesValue);
      $scope.person.protein = Formulas.proteins($scope.person.weightProtein, $scope.person.weightProteinValue);
    });
  }

})();
