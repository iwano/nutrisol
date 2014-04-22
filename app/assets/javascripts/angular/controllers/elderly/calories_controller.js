(function() {

  'use strict';

  angular.module('controllers')
      .controller('ElderlyCaloriesController', ['$scope', 'elderlyFormulas', controller]);

  function controller($scope, Formulas) {

    $scope.genderFilter = 'male';

    $scope.person = {
      weight: 0,
      ree: 0,
      ger: 0,
      naf: 0
    };

    $scope.$watchCollection('[person.weight, genderFilter]', function(newValues, oldValues){
      var result;
      if ($scope.genderFilter == 'male') {
        result = Formulas.gerMen($scope.person.weight);
      } else {
        result = Formulas.gerWomen($scope.person.weight);
      }
      $scope.person.ger = result;
    });

    $scope.$watchCollection('[person.ger, person.naf]', function(newValues, oldValues){
      $scope.person.ree = Formulas.ree($scope.person.ger, $scope.person.naf);
    });

  }
})();

