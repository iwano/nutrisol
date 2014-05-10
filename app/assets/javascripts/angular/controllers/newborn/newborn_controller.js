(function() {
  'use strict';

  angular.module('controllers')
      .controller('NewbornController', ['$scope', 'newbornFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.newborn', {
          url: 'recien_nacido',
          templateUrl: 'angular/templates/newborn/index.html',
          controller: 'NewbornController',
          data: {
            ncyBreadcrumbLabel: 'Recién nacido'
          }
        })
        .state('root.newborn.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/newborn/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.newborn.anthropometry', {
          url: '/antropometria',
          templateUrl: 'angular/templates/newborn/anthropometry.html',
          controller: 'NewbornAnthropometryController',
          data: {
            ncyBreadcrumbLabel: 'Antropometría'
          }
        })
        .state('root.newborn.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/newborn/calories.html',
          controller: 'NewbornCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Calorías'
          }
        })
        .state('root.newborn.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
  }]);

})();
