(function() {
  'use strict';

  angular.module('controllers')
      .controller('AdultController', ['$scope', 'adultFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.adult', {
          url: 'adulto',
          templateUrl: 'angular/templates/adult/index.html',
          controller: 'AdultController',
          data: {
            ncyBreadcrumbLabel: 'Adulto'
          }
        })
        .state('root.adult.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/adult/calories.html',
          controller: 'AdultCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Peso Esperado'
          }
        })
        .state('root.adult.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/adult/anthropometry.html',
          controller: 'AdultAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.adult.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/adult/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.adult.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
      }]);

})();
