(function() {

  'use strict';

  angular.module('controllers')
      .controller('IndexController', ['$modal', '$scope', controller]);

  function controller($modal, $scope) {
    $scope.title = 'such nutriments';

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
