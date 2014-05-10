(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailurePredialysisController', ['$scope', 'predialysisFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.kidney_failure.predialysis', {
          url: '/predialitico',
          templateUrl: 'angular/templates/kidney_failure/predialysis/index.html',
          controller: 'KidneyFailurePredialysisController',
          data: {
            ncyBreadcrumbLabel: 'Prediálisis'
          }
        })
        .state('root.kidney_failure.predialysis.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/kidney_failure/predialysis/anthropometry.html',
          controller: 'KidneyFailurePredialysisAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.kidney_failure.predialysis.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/kidney_failure/predialysis/calories.html',
          controller: 'KidneyFailurePredialysisCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Calorias'
          }
        })
        .state('root.kidney_failure.predialysis.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/kidney_failure/predialysis/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.kidney_failure.predialysis.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
    }]);

})();
