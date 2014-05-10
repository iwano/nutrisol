(function() {
  'use strict';

  angular.module('controllers')
      .controller('PregnantController', ['$scope', 'pregnantFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.pregnant', {
          url: 'embarazo',
          templateUrl: 'angular/templates/pregnant/index.html',
          controller: 'PregnantController',
          data: {
            ncyBreadcrumbLabel: 'Embarazo'
          }
        }).state('root.pregnant.expected_weight', {
          url: '/peso_esperado',
          templateUrl: 'angular/templates/pregnant/expected_weight.html',
          controller: 'PregnantExpectedWeightController',
          data: {
            ncyBreadcrumbLabel: 'Peso esperado'
          }
        })
        .state('root.pregnant.calories', {
          url: '/calorias',
          templateUrl: 'angular/templates/pregnant/calories.html',
          controller: 'PregnantCaloriesController',
          data: {
            ncyBreadcrumbLabel: 'Calorias'
          }
        })
        .state('root.pregnant.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
        .state('root.pregnant.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/pregnant/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
  }]);

})();
