(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailureDialysisController', ['$scope', 'dialysisFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.kidney_failure.dialysis', {
          url: '/dialisis',
          templateUrl: 'angular/templates/kidney_failure/dialysis/index.html',
          controller: 'KidneyFailureDialysisController',
          data: {
            ncyBreadcrumbLabel: 'Diálisis'
          }
        })
        .state('root.kidney_failure.dialysis.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/kidney_failure/predialysis/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.kidney_failure.dialysis.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/kidney_failure/predialysis/anthropometry.html',
          controller: 'KidneyFailurePredialysisAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.kidney_failure.dialysis.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/kidney_failure/dialysis/rations.html',
          controller: 'KidneyFailureDialysisRationsController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
    }]);

})();
