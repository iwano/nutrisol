(function() {

  'use strict';

  angular.module('controllers')
      .controller('IndexController', ['$modal', '$scope', controller]);

  function controller($modal, $scope) {

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

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root', {
          url: '/',
          templateUrl: 'angular/templates/index.html',
          controller: 'IndexController',
          data: {
            ncyBreadcrumbLabel: 'Inicio'
          }
        });
  }]);
})();
