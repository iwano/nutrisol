(function() {
  'use strict';

  angular.module('controllers')
      .controller('NewbornAnthropometryController', ['$modal', '$scope', controller]);

  function controller($modal, $scope) {

    $scope.genderFilter = 'boy';
    $scope.typeFilter = 'percentile';

    $scope.showImage = function(title) {
       $modal.open({
        templateUrl: 'angular/templates/newborn/graphics_modal.html',
        controller: GraphicsModalCtrl,
        windowClass: 'modal-big',
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
