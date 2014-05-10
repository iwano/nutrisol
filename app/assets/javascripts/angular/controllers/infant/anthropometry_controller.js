(function() {
  'use strict';

  angular.module('controllers')
      .controller('InfantAnthropometryController', ['$modal', '$scope', 'infantFormulas', controller]);

  function controller($modal, $scope, Formulas) {

    $scope.genderFilter = 'boy';
    $scope.typeFilter = 'percentile';
    $scope.person = {
      weight: 0,
      referenceWeight: 0,
      ped: 0,
      height: 0,
      referenceHeight: 0,
      le: 0,
      bmi: 0,
      referenceBmi: 0,
      pl: 0,
    }

    $scope.$watchCollection('[person.weight, person.referenceWeight]', function(newValues, oldValues){
      $scope.person.ped = Formulas.ped($scope.person.weight, $scope.person.referenceWeight);
    });

    $scope.$watchCollection('[person.height, person.referenceHeight]', function(newValues, oldValues){
      $scope.person.le = Formulas.le($scope.person.height, $scope.person.referenceHeight);
    });

    $scope.$watchCollection('[person.bmi, person.referenceBmi]', function(newValues, oldValues){
      $scope.person.pl = Formulas.pl($scope.person.bmi, $scope.person.referenceBmi);
    });

    $scope.showImage = function(title) {
       $modal.open({
        templateUrl: 'angular/templates/newborn/graphics_modal.html',
        controller: GraphicsModalCtrl,
        resolve: {
          image: function() {
            var image = 'assets/graphics/' + $scope.genderFilter + '/' + $scope.typeFilter + '/' + title + '.png';
            return image;
          }
        }
      });
    }

  }

  var GraphicsModalCtrl = ['$scope', '$modalInstance', 'image', modal]

  function modal ($scope, $modalInstance, image) {

    $scope.image = image;

    $scope.ok = function () {
      $modalInstance.dismiss('cancel');
    };

  };

})();
