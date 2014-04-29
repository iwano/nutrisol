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
      .state('root.elderly', {
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
      .state('root.kidney_failure', {
        url: 'insuficiencia_renal',
        templateUrl: 'angular/templates/kidney_failure/index.html',
        controller: 'KidneyFailureController',
        data: {
          ncyBreadcrumbLabel: 'Insuficiencia Renal'
        }
      })
      .state('root.kidney_failure.dialysis', {
        url: '/dialisis',
        templateUrl: 'angular/templates/kidney_failure/dialysis/index.html',
        controller: 'KidneyFailureDialysisController',
        data: {
          ncyBreadcrumbLabel: 'Diálisis'
        }
      })
      .state('root.kidney_failure.dialysis.lab_studies', {
        url: '/estudios_de_laboratorio',
        templateUrl: 'angular/templates/kidney_failure/predialysis/lab_studies.html',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      })
      .state('root.kidney_failure.dialysis.anthropometry', {
        url: '/antropometria',
        templateUrl: 'angular/templates/kidney_failure/predialysis/anthropometry.html',
        controller: 'KidneyFailurePredialysisAnthropometryController',
        data: {
          ncyBreadcrumbLabel: 'Diálisis'
        }
      })
      .state('root.kidney_failure.dialysis.rations', {
        url: '/raciones',
        templateUrl: 'angular/templates/kidney_failure/dialysis/rations.html',
        controller: 'KidneyFailureDialysisRationsController',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      })
      .state('root.kidney_failure.predialysis', {
        url: '/predialitico',
        templateUrl: 'angular/templates/kidney_failure/predialysis/index.html',
        controller: 'KidneyFailurePredialysisController',
        data: {
          ncyBreadcrumbLabel: 'Prediálisis'
        }
      })
      .state('root.kidney_failure.predialysis.anthropometry', {
        url: '/antropometria',
        templateUrl: 'angular/templates/kidney_failure/predialysis/anthropometry.html',
        controller: 'KidneyFailurePredialysisAnthropometryController',
        data: {
          ncyBreadcrumbLabel: 'Antropometría'
        }
      })
      .state('root.kidney_failure.predialysis.calories', {
        url: '/calorias',
        templateUrl: 'angular/templates/kidney_failure/predialysis/calories.html',
        controller: 'KidneyFailurePredialysisCaloriesController',
        data: {
          ncyBreadcrumbLabel: 'Calorias'
        }
      })
      .state('root.kidney_failure.predialysis.lab_studies', {
        url: '/estudios_de_laboratorio',
        templateUrl: 'angular/templates/kidney_failure/predialysis/lab_studies.html',
        data: {
          ncyBreadcrumbLabel: 'Estudios de Laboratorio'
        }
      })
      .state('root.kidney_failure.predialysis.rations', {
        url: '/raciones',
        templateUrl: 'angular/templates/general/diet_calculation.html',
        controller: 'DietCalculationController',
        data: {
          ncyBreadcrumbLabel: 'Raciones'
        }
      })
      .state('root.kidney_failure.hemodialysis', {
        url: '/hemodialisis',
        templateUrl: 'angular/templates/kidney_failure/hemodialysis/index.html',
        controller: 'KidneyFailureHemodialysisController',
        data: {
          ncyBreadcrumbLabel: 'Hemodiálisis'
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


nutrisol.run(['$rootScope', '$state', 'FamousQuotes', function($rootScope, $state, FamousQuotes) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.currentSection = $state.current.name;
      $rootScope.currentQuote = FamousQuotes[Math.floor((Math.random() * FamousQuotes.length) + 1)];
      $rootScope.currentTemplateFolder = $rootScope.currentSection.split('.')[1];
      $rootScope.sidebarToggle = false;
    });
}]);
