(function() {

  'use strict';

  angular.module('controllers')
      .controller('AdultAnthropometryController', ['$scope', 'adultFormulas', controller]);

  function controller($scope, Formulas) {
    $scope.title = 'such nutriments';

    $scope.genderFilter = 'hombres';

    $scope.person = {
      age: 0,
      height: 0,
      weight: 0,
      bmi: 0,
      wrist: 0,
      waist: 0,
      hips: 0,
      idealWeight: 0,
      cc: 0,
      icc: 0,
      agia: 0,
      act: 0,
      cgt: 0,
      gct: 0,
      mlg: 0,
      gctPercentage: 0
    };


    $scope.$watchCollection('[person.height, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'hombres') {
        result = Formulas.idealWeightMen($scope.person.height);
      } else {
        result = Formulas.idealWeightWomen($scope.person.height);
      }
      $scope.person.idealWeight = result;
    });

    $scope.$watchCollection('[person.height, person.weight, genderFilter]', function(newValues, oldValues){
      $scope.person.bmi = Formulas.bmi($scope.person.height, $scope.person.weight);
    });

    $scope.$watchCollection('[person.height, person.wrist]', function(newValues, oldValues){
      $scope.person.cc = Formulas.cc($scope.person.height, $scope.person.wrist);
    });

    $scope.$watchCollection('[person.waist, person.hips]', function(newValues, oldValues){
      $scope.person.icc = Formulas.icc($scope.person.waist, $scope.person.hips);
    });

    $scope.$watchCollection('[person.waist, person.age]', function(newValues, oldValues){
      $scope.person.agia = Formulas.agia($scope.person.waist, $scope.person.age);
    });

    $scope.$watchCollection('[person.height, person.weight, person.age, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'hombres') {
        result = Formulas.actMen($scope.person.height, $scope.person.weight, $scope.person.age);
      } else {
        result = Formulas.actWomen($scope.person.height, $scope.person.weight, $scope.person.age);
      }
      $scope.person.act = result;
    });

    $scope.$watchCollection('[person.height, person.weight, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'hombres') {
        result = Formulas.gctMen($scope.person.height, $scope.person.bmi);
      } else {
        result = Formulas.gctWomen($scope.person.height, $scope.person.bmi);
      }
      $scope.person.gct = result;
    });

    $scope.$watchCollection('[person.weight, person.gct]', function(newValues, oldValues){
      $scope.person.mlg = Formulas.mlg($scope.person.weight, $scope.person.gct);
    });

    $scope.$watchCollection('[person.age, person.waist, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'hombres') {
        result = Formulas.gctPercentageMen($scope.person.age, $scope.person.waist);
      } else {
        result = Formulas.gctPercentageWomen($scope.person.age, $scope.person.waist);
      }
      $scope.person.gctPercentage = result;
    });

  }
})();

