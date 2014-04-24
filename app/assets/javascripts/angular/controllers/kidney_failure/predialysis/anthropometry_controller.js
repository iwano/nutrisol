(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailurePredialysisAnthropometryController', ['$scope', 'predialysisFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.person = {
      gender: 'male',
      adultType: 'adult',
      weight: 0,
      height: 0,
      waist: 0,
      hips: 0,
      idealWeight: 0,
      dryWeight: 0,
      bmi: 0,
      waistHipsIndex: 0
    }

    $scope.$watchCollection('[person.height, person.gender]', function(newValues, oldValues){
      var result;
      if ($scope.person.gender == 'male') {
        result = Formulas.idealWeightMen($scope.person.height);
      } else {
        result = Formulas.idealWeightWomen($scope.person.height);
      }
      $scope.person.idealWeight = result;
    });

    $scope.$watchCollection('[person.weight, person.idealWeight]', function(newValues, oldValues){
      $scope.person.dryWeight = Formulas.dryWeight($scope.person.weight, $scope.person.idealWeight);
    });

    $scope.$watchCollection('[person.height, person.weight]', function(newValues, oldValues){
      $scope.person.bmi = Formulas.bmi($scope.person.height, $scope.person.weight);
    });

    $scope.$watchCollection('[person.waist, person.hips]', function(newValues, oldValues){
      $scope.person.waistHipsIndex = Formulas.waistHipsIndex($scope.person.waist, $scope.person.hips);
    });
  }

})();
