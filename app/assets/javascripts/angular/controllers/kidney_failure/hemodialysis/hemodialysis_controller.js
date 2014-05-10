(function() {
  'use strict';

  angular.module('controllers')
      .controller('KidneyFailureHemodialysisController', ['$scope', 'hemodialysisFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.kidney_failure.hemodialysis', {
          url: '/hemodialisis',
          templateUrl: 'angular/templates/kidney_failure/hemodialysis/index.html',
          controller: 'KidneyFailureHemodialysisController',
          data: {
            ncyBreadcrumbLabel: 'Hemodiálisis'
          }
        })
        .state('root.kidney_failure.hemodialysis.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/kidney_failure/predialysis/anthropometry.html',
          controller: 'KidneyFailurePredialysisAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.kidney_failure.hemodialysis.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/kidney_failure/hemodialysis/calories.html',
          controller: 'KidneyFailureHemodialysisCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Calorías'
          }
        })
        .state('root.kidney_failure.hemodialysis.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/kidney_failure/predialysis/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.kidney_failure.hemodialysis.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        });
    }]);

})();
