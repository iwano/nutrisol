(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailureController', ['$scope', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.kidney_failure', {
          url: 'insuficiencia_renal',
          templateUrl: 'angular/templates/kidney_failure/index.html',
          controller: 'KidneyFailureController',
          data: {
            ncyBreadcrumbLabel: 'Insuficiencia Renal'
          }
        })
    }]);

})();
