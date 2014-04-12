(function() {

  'use strict';

  angular.module('controllers')
      .controller('IndexController', ['$modal', '$scope', controller]);

  function controller($modal, $scope) {
    $scope.title = 'such nutriments';

    $scope.genderFilter = 'hombres';

    $scope.person = {
      age: 0,
      height: 0,
      weight: 0
    };

    $scope.$watchCollection('[person.age, person.height, person.weight, genderFilter]', function(newValues, oldValues){
      //hombres: TMB = 66,4730 + (13,7516 x peso en kg) + (5,0033 x altura en cm) - (6,7550 x edad en años)
      //mujeres: TMB = 655,0955 + (9,5634 x peso en kg) + (1,8496 x altura en cm) - (4,6756 x edad en años)
      var result;
      if ($scope.genderFilter == 'hombres'){
        result = 664730 + (137516 * $scope.person.weight) + (50033 * $scope.person.height) - (67550 * $scope.person.age);
      } else {
        result = 550955 + (95634 * $scope.person.weight) + (18496 * $scope.person.height) - (46756 * $scope.person.age);
      }
      $scope.result = result;
    });

    $scope.openAboutModal = function() {
       $modal.open({
        templateUrl: 'angular/templates/about_modal.html',
        controller: 'AboutModalCtrl',
        resolve: {
          message: function () {
            return '//TODO: fill this in';
          }
        }
      });
    }
  }
})();
