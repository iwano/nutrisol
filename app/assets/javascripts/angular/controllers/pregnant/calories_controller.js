(function() {
  'use strict';

  angular.module('controllers')
      .controller('PregnantCaloriesController', ['$scope', 'pregnantFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.adultCalories = [
      { calories: 85, quarter: 'Primero' },
      { calories: 285, quarter: 'Segundo' },
      { calories: 475, quarter: 'Tercero' }
    ];

    $scope.teenagerCalories = [
      { calories: 26, age: '12 a 13' },
      { calories: 24, age: '13 a 14' },
      { calories: 19, age: '14 a 15' },
      { calories: 12, age: '15 a 16' },
      { calories: 5, age: '16 a 17' },
      { calories: 0, age: '17 a 18' }
    ];

    $scope.person = {
      age: 0,
      weightBeforePregnancy: 0,
      type: 'teenager',
      physicalActivity: 0,
      adultCalories: $scope.adultCalories[0].calories,
      teenagerCalories: $scope.teenagerCalories[0].calories
    };

    $scope.$watchCollection('[person.age, person.type, person.weightBeforePregnancy, person.adultCalories, person.teenagerCalories, person.physicalActivity]', function(newValues, oldValues){
      var result;
      if ($scope.person.type == 'teenager') {
        result  = Formulas.totalCaloriesTeenager($scope.person.weightBeforePregnancy, $scope.person.teenagerCalories);
      } else {
        if ($scope.person.age >= 18 && $scope.person.age <= 30) {
          result = Formulas.totalCaloriesAdult($scope.person.weightBeforePregnancy, $scope.person.physicalActivity, $scope.person.adultCalories, $scope.person.age);
        } else{
          result = Formulas.totalCaloriesAdult($scope.person.weightBeforePregnancy, $scope.person.physicalActivity, $scope.person.adultCalories, $scope.person.age);
        }
      }
      $scope.result = result;
    });
  }

})();
