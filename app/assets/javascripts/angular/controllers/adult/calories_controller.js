(function() {

  'use strict';

  angular.module('controllers')
      .controller('AdultCaloriesController', ['$scope', 'adultFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.title = 'such nutriments';

    $scope.genderFilter = 'male';

    $scope.person = {
      age: 0,
      height: 0,
      weight: 0,
      bmi: 0,
      tmb: 0,
      physicalActivity: 0,
      totalCalories: 0
    };


    $scope.$watchCollection('[person.age, person.height, person.weight, person.physicalActivity, genderFilter]', function(newValues, oldValues){
      //hombres: TMB = 66,4730 + (13,7516 x peso en kg) + (5,0033 x altura en cm) - (6,7550 x edad en años)
      //mujeres: TMB = 655,0955 + (9,5634 x peso en kg) + (1,8496 x altura en cm) - (4,6756 x edad en años)
      var result;
      $scope.person.bmi = Formulas.bmi($scope.person.height, $scope.person.weight);

      if ($scope.genderFilter == 'male'){
        result = Formulas.tmbMen($scope.person.age, $scope.person.height, $scope.person.weight);
      } else {
        result = Formulas.tmbWomen($scope.person.age, $scope.person.height, $scope.person.weight);
      }
      $scope.person.tmb = result;
      $scope.person.totalCalories = Formulas.totalCalories($scope.person.tmb, $scope.person.physicalActivity);
    });

  }
})();

