nutrisol.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('root', {
        url: '/',
        templateUrl: 'angular/templates/index.html',
        controller: 'IndexController',
        data: {
          ncyBreadcrumbLabel: 'Inicio'
        }
      })
      .state('root.pregnant', {
        url: 'embarazo',
        templateUrl: 'angular/templates/pregnant/index.html',
        controller: 'PregnantController',
        data: {
          ncyBreadcrumbLabel: 'Embarazo'
        }
      })
      .state('root.pregnant.expected_weight', {
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
      .state('root.newborn', {
        url: 'recien_nacido',
        templateUrl: 'angular/templates/newborn/index.html',
        controller: 'NewbornController',
        data: {
          ncyBreadcrumbLabel: 'Recién nacido'
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
      .state('root.infant', {
        url: 'lactante',
        templateUrl: 'angular/templates/infant/index.html',
        controller: 'InfantController',
        data: {
          ncyBreadcrumbLabel: 'Lactante'
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
      .state('root.preschool', {
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
      .state('root.scholar', {
        url: 'escolar',
        templateUrl: 'angular/templates/scholar/index.html',
        controller: 'ScholarController',
        data: {
          ncyBreadcrumbLabel: 'Escolar'
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
      .state('root.teenager', {
        url: 'adolescente',
        templateUrl: 'angular/templates/teenager/index.html',
        controller: 'TeenagerController',
        data: {
          ncyBreadcrumbLabel: 'Adolescente'
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
      .state('root.adult', {
        url: 'adulto',
        templateUrl: 'angular/templates/adult/index.html',
        controller: 'AdultController',
        data: {
          ncyBreadcrumbLabel: 'Adulto'
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
      .state('root.elderly', {
        url: 'adulto_mayor',
        templateUrl: 'angular/templates/elderly/index.html',
        controller: 'ElderlyController',
        data: {
          ncyBreadcrumbLabel: 'Adulto Mayor'
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
      .state('root.predialytic', {
        url: 'predialitico',
        templateUrl: 'angular/templates/predialytic/index.html',
        controller: 'PredialyticController',
        data: {
          ncyBreadcrumbLabel: 'Prediálitico'
        }
      })
      .state('root.predialytic.rations', {
        url: '/raciones',
        templateUrl: 'angular/templates/general/diet_calculation.html',
        controller: 'DietCalculationController',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      })
      .state('root.dialysis', {
        url: 'dialisis',
        templateUrl: 'angular/templates/dialysis/index.html',
        controller: 'DialysisController',
        data: {
          ncyBreadcrumbLabel: 'Diálisis'
        }
      })
      .state('root.dialysis.rations', {
        url: '/raciones',
        templateUrl: 'angular/templates/general/diet_calculation.html',
        controller: 'DietCalculationController',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      })
      .state('root.hemodialysis', {
        url: 'hemodialisis',
        templateUrl: 'angular/templates/hemodialysis/index.html',
        controller: 'HemodialysisController',
        data: {
          ncyBreadcrumbLabel: 'Hemodiálisis'
        }
      })
      .state('root.hemodialysis.rations', {
        url: '/raciones',
        templateUrl: 'angular/templates/general/diet_calculation.html',
        controller: 'DietCalculationController',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      });
  }]);


nutrisol.run(['$rootScope', '$state', 'FamousQuotes', function($rootScope, $state, FamousQuotes) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.currentSection = $state.current.name;
      $rootScope.currentQuote = FamousQuotes[Math.floor((Math.random() * FamousQuotes.length) + 1)];
      $rootScope.currentTemplateFolder = $rootScope.currentSection.split('.')[1];
    });
}]);
