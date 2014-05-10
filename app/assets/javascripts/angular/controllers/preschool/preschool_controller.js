(function() {
  'use strict';

  angular.module('controllers')
      .controller('PreschoolController', ['$scope', 'preschoolFormulas', controller]);

  function controller($scope, Formulas) {
  }

  nutrisol.config(['$stateProvider',
      function($stateProvider) {
        $stateProvider.state('root.preschool', {
          url: 'preescolar',
          templateUrl: 'angular/templates/preschool/index.html',
          controller: 'PreschoolController',
          data: {
            ncyBreadcrumbLabel: 'Preescolar'
          }
        })
        .state('root.preschool.rations', {
          url: '/raciones',
          templateUrl: 'angular/templates/general/diet_calculation.html',
          controller: 'DietCalculationController',
          data: {
            ncyBreadcrumbLabel: 'Raciones'
          }
        })
  }]);

})();
