(function() {
  'use strict';

  angular.module('controllers')
      .controller('TeenagerController', ['$scope', 'teenagerFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.teenager', {
          url: 'adolescente',
          templateUrl: 'angular/templates/teenager/index.html',
          controller: 'TeenagerController',
          data: {
            ncyBreadcrumbLabel: 'Adolescente'
          }
        })
        .state('root.teenager.lab_studies', {
          url: '/estudios_de_laboratorio',
          templateUrl: 'angular/templates/teenager/lab_studies.html',
          data: {
            ncyBreadcrumbLabel: 'Estudios de Laboratorio'
          }
        })
        .state('root.teenager.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
    }]);

})();
