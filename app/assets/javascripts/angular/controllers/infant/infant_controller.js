(function() {
  'use strict';

  angular.module('controllers')
      .controller('InfantController', ['$scope', 'infantFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.infant', {
          url: 'lactante',
          templateUrl: 'angular/templates/infant/index.html',
          controller: 'InfantController',
          data: {
            ncyBreadcrumbLabel: 'Lactante'
          }
        })
        .state('root.infant.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/infant/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.infant.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/infant/anthropometry.html',
          controller: 'InfantAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.infant.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
  }]);

})();
