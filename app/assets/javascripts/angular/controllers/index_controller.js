(function() {

  'use strict';

  angular.module('controllers')
      .controller('IndexController', ['$modal', '$scope', 'Formulas', controller]);

  function controller($modal, $scope, Formulas) {

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
