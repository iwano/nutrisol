(function() {
  'use strict';

  angular.module('controllers')
      .controller('ScholarController', ['$scope', 'scholarFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.scholar', {
          url: 'escolar',
          templateUrl: 'angular/templates/scholar/index.html',
          controller: 'ScholarController',
          data: {
            ncyBreadcrumbLabel: 'Escolar'
          }
        })
        .state('root.scholar.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/scholar/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.scholar.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
  }]);

})();
