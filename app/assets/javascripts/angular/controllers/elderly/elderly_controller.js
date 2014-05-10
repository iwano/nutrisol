(function() {
  'use strict';

  angular.module('controllers')
      .controller('ElderlyController', ['$scope', 'elderlyFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.elderly', {
          url: 'adulto_mayor',
          templateUrl: 'angular/templates/elderly/index.html',
          controller: 'ElderlyController',
          data: {
            ncyBreadcrumbLabel: 'Adulto Mayor'
          }
        })
        .state('root.elderly.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/elderly/anthropometry.html',
          controller: 'ElderlyAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.elderly.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/elderly/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.elderly.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/elderly/calories.html',
          controller: 'ElderlyCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Calorías'
          }
        })
        .state('root.elderly.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
      }]);
})();
