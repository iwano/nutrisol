(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailureDialysisRationsController', ['$scope', 'GeneralFormulas', 'dialysisFormulas', controller]);

  function controller($scope, GeneralFormulas, Formulas) {

    $scope.caloriesValuesDiabetic = [25, 30, 35];
    $scope.caloriesValues         = [40, 45, 50];

    $scope.proteinGramsDiabetic = [1.2, 1.3];
    $scope.proteinGrams         = [1.2, 1.3, 1.4, 1.5];

    $scope.dialysisPercentages  = [1.5, 2.5, 4.25];

    $scope.person = {
      isDiabetic: false,
      weightProteinValue: 0,
      weightCaloriesValue: 0,
      weightCalories: 0,
      weightProtein: 0,
      dialysisTimesPerDay: 0,
      dialysisLiters: 0,
      dialysisPercentage: 0,
      dialysisHC: 0,
      dialysisHCkcal: 0,
      kcal: 0,
      proteins: 0
    }

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
      carbohydratesByDialysis: {
        g: 0,
        kcal: 0,
        percentage: 0
      },
      totalPercentage: 0,
      totalCalories: 0,
      totalCaloriesReference: 0
    };

    //Calories & Proteins **************************************************
    //********************

    $scope.$watchCollection('[person.weightCalories, person.weightProtein, person.weightCaloriesValue, person.weightProteinValue]', function(newValues, oldValues){
      $scope.person.kcal = Formulas.kcal($scope.person.weightCalories, $scope.person.weightCaloriesValue);
      $scope.person.proteins = Formulas.proteins($scope.person.weightProtein, $scope.person.weightProteinValue);

      $scope.calories.totalCalories = $scope.person.kcal;
    });

    //Dialysis Calculations ************************************************
    //********************

    $scope.$watchCollection('[person.dialysisTimesPerDay, person.dialysisPercentage, person.dialysisLiters]', function(newValues, oldValues){
      $scope.person.dialysisHC = Formulas.dialysisHC($scope.person.dialysisTimesPerDay, $scope.person.dialysisPercentage, $scope.person.dialysisLiters);
      $scope.person.dialysisHCkcal = Formulas.dialysisHCkcal($scope.person.dialysisHC);

      if ($scope.calories.totalCalories > 0) {
        $scope.calories.carbohydratesByDialysis.percentage = $scope.person.dialysisHCkcal * 100 / $scope.calories.totalCalories;
      }
    });

    $scope.rationsValues = GeneralFormulas.rationsByGroup();

    $scope.rations = GeneralFormulas.rationsTotalsByGroup();

    $scope.rations.totalKcal = 1455;
    $scope.rations.totalProteins = 80;
    $scope.rations.totalLipids = 57;
    $scope.rations.totalCarbohydrates = 158;

    //Calories Distribution Calculations ***********************************
    //*********************

    $scope.$watch('calories.totalCalories', function(newValue, oldValue) {
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
      if ($scope.person.dialysisHCkcal > 0) {
        $scope.calories.carbohydratesByDialysis.percentage = $scope.person.dialysisHCkcal * 100 / $scope.calories.totalCalories;
      }
    });

    $scope.$watchCollection('[calories.proteins.percentage, calories.lipids.percentage, calories.carbohydrates.percentage, calories.carbohydratesByDialysis.percentage]', function(newValues, oldValues){
      var result;

      if ($scope.calories.totalCalories > 0) {
        $scope.calories.proteins.kcal = ($scope.calories.proteins.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.proteins.g = $scope.calories.proteins.kcal / 4;

        $scope.calories.lipids.kcal = ($scope.calories.lipids.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.lipids.g = $scope.calories.lipids.kcal / 9;

        $scope.calories.carbohydrates.kcal = ($scope.calories.carbohydrates.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.carbohydrates.g = $scope.calories.carbohydrates.kcal / 4;

        $scope.calories.carbohydratesByDialysis.kcal = ($scope.calories.carbohydratesByDialysis.percentage * $scope.calories.totalCalories) / 100;
        $scope.calories.carbohydratesByDialysis.g = $scope.calories.carbohydratesByDialysis.kcal / 4;
      }
      $scope.calories.totalPercentage = $scope.calories.proteins.percentage + $scope.calories.lipids.percentage + $scope.calories.carbohydrates.percentage + $scope.calories.carbohydratesByDialysis.percentage;

      $scope.calories.totalCaloriesReference = $scope.calories.totalCalories - $scope.calories.carbohydratesByDialysis.kcal;

    });

    //Rations Calculations *************
    //*********************

    $scope.updateNutrimentsTotals = function(food, foodValues, newValue, oldValue) {
      food.kcal = foodValues.kcal * newValue;
      food.proteins = foodValues.proteins * newValue;
      food.lipids = foodValues.lipids * newValue;
      food.hc = foodValues.hc * newValue;

      $scope.rations.totalKcal = $scope.rations.totalKcal - (oldValue * foodValues.kcal) + food.kcal;
      $scope.rations.totalProteins = $scope.rations.totalProteins - (oldValue * foodValues.proteins) + food.proteins;
      $scope.rations.totalLipids = $scope.rations.totalLipids - (oldValue * foodValues.lipids) + food.lipids;
      $scope.rations.totalCarbohydrates = $scope.rations.totalCarbohydrates - (oldValue * foodValues.hc) + food.hc;
    };

    $scope.$watch('rations.vegetables.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.vegetables;
      var f = $scope.rations.vegetables;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.fruits.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.fruits;
      var f = $scope.rations.fruits;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.grains.without_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.grains.without_fat;
      var f = $scope.rations.grains.without_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.grains.with_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.grains.with_fat;
      var f = $scope.rations.grains.with_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.legumes.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.legumes;
      var f = $scope.rations.legumes;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.animal_source.very_low_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.animal_source.very_low_fat;
      var f = $scope.rations.animal_source.very_low_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.animal_source.low_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.animal_source.low_fat;
      var f = $scope.rations.animal_source.low_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.animal_source.moderated_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.animal_source.moderated_fat;
      var f = $scope.rations.animal_source.moderated_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.animal_source.high_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.animal_source.high_fat;
      var f = $scope.rations.animal_source.high_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.milk.skim.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.milk.skim;
      var f = $scope.rations.milk.skim;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.milk.semiskim.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.milk.semiskim;
      var f = $scope.rations.milk.semiskim;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.milk.whole.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.milk.whole;
      var f = $scope.rations.milk.whole;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.milk.sugary.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.milk.sugary;
      var f = $scope.rations.milk.sugary;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.fats_and_oils.without_proteins.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.fats_and_oils.without_proteins;
      var f = $scope.rations.fats_and_oils.without_proteins;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.fats_and_oils.with_proteins.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.fats_and_oils.with_proteins;
      var f = $scope.rations.fats_and_oils.with_proteins;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.sugars.without_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.sugars.without_fat;
      var f = $scope.rations.sugars.without_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });

    $scope.$watch('rations.sugars.with_fat.rations', function(newValue, oldValue) {
      var fv = $scope.rationsValues.sugars.with_fat;
      var f = $scope.rations.sugars.with_fat;
      $scope.updateNutrimentsTotals(f, fv, newValue, oldValue);
    });
  }

})();
