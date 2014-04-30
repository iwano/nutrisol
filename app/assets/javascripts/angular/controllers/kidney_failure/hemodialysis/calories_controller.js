(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailureHemodialysisCaloriesController', ['$scope', 'hemodialysisFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.proteinGrams = [1.2, 1.3, 1.4, 1.5];

    $scope.person = {
      isDiabetic: false,
      weightCaloriesValue: 35,
      weightProteinValue: 1.2,
      weightCalories: 0,
      weightProtein: 0,
      kcal: 0,
      protein: 0
    }

    $scope.$watch('person.isDiabetic', function(newValues, oldValues) {
      if (!isDiabetic) $scope.person.weightProteinValue = 1.2;
    });

    $scope.$watchCollection('[person.weightCalories, person.weightProtein, person.weightProteinValue]', function(newValues, oldValues){
      $scope.person.kcal = Formulas.kcal($scope.person.weightCalories, $scope.person.weightCaloriesValue);
      $scope.person.protein = Formulas.proteins($scope.person.weightProtein, $scope.person.weightProteinValue);
    });
  }

})();
