(function() {

  'use strict';

  angular.module('controllers')
      .controller('ElderlyAnthropometryController', ['$scope', 'elderlyFormulas', controller]);

  function controller($scope, Formulas) {

    $scope.genderFilter = 'male';
    $scope.heightOption = 'armspan';

    $scope.person = {
      age: 0,
      height: 0,
      weight: 0,
      bmi: 0,
      armspan: 0,
      elbowWidth: 0,
      tallness: 0,
      cc: 0,
      gct: 0
    };

    $scope.$watchCollection('[person.armspan, person.height, heightOption]', function(newValues, oldValues){
      var height;
      if ($scope.heightOption == 'armspan') {
        height = Formulas.t($scope.person.armspan);
      } else {
        height = $scope.person.height;
      }
      $scope.person.tallness = height;
    });

    $scope.$watchCollection('[person.tallness, person.elbowWidth]', function(newValues, oldValues){
      $scope.person.cc = Formulas.cc($scope.person.elbowWidth, $scope.person.tallness);
    });

    $scope.$watchCollection('[person.tallness, person.weight]', function(newValues, oldValues){
      $scope.person.bmi = Formulas.bmi($scope.person.tallness, $scope.person.weight);
    });

    $scope.$watchCollection('[person.bmi, person.age, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'male') {
        result = Formulas.gctMen($scope.person.bmi, $scope.person.age);
      } else {
        result = Formulas.gctWomen($scope.person.bmi, $scope.person.age);
      }
      $scope.person.gct = result;
    });

  }
})();

