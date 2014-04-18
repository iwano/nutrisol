(function() {
  'use strict';

  angular.module('controllers')
      .controller('PregnantRationsController', ['$scope', 'GeneralFormulas', 'pregnantFormulas', controller]);

  function controller($scope, GeneralFormulas, Formulas) {

    $scope.calories = {
      proteins: {
        g: 0,
        kcal: 0,
        percentage: 0
      },
      lipids: {
        g: 0,
        kcal: 0,
        percentage: 0
      },
      carbohydrates: {
        g: 0,
        kcal: 0,
        percentage: 0
      },
      totalPercentage: 0,
      totalCalories: 0
    };

    $scope.rations = GeneralFormulas.rationsByGroup();

    $scope.$watch('calories.totalCalories', function(newValues, oldValue) {
      if ($scope.calories.proteins.percentage > 0) {
        $scope.calories.proteins.kcal = ($scope.calories.proteins.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.proteins.g = $scope.calories.proteins.kcal / 4;
      }
      if ($scope.calories.lipids.percentage > 0) {
        $scope.calories.lipids.kcal = ($scope.calories.lipids.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.lipids.g = $scope.calories.lipids.kcal / 9;
      }
      if ($scope.calories.carbohydrates.percentage > 0) {
        $scope.calories.carbohydrates.kcal = ($scope.calories.carbohydrates.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.carbohydrates.g = $scope.calories.carbohydrates.kcal / 4;
      }
    });

    $scope.$watchCollection('[calories.proteins.percentage, calories.lipids.percentage, calories.carbohydrates.percentage]', function(newValues, oldValues){
      var result;

      if ($scope.calories.totalCalories > 0) {
        $scope.calories.proteins.kcal = ($scope.calories.proteins.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.proteins.g = $scope.calories.proteins.kcal / 4;
        $scope.calories.lipids.kcal = ($scope.calories.lipids.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.lipids.g = $scope.calories.lipids.kcal / 9;
        $scope.calories.carbohydrates.kcal = ($scope.calories.carbohydrates.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.carbohydrates.g = $scope.calories.carbohydrates.kcal / 4;
      }
      $scope.calories.totalPercentage = $scope.calories.proteins.percentage + $scope.calories.lipids.percentage + $scope.calories.carbohydrates.percentage;

    });

  }

})();
