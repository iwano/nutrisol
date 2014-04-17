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
      .state('root.newborn', {
        url: 'recien_nacido',
        templateUrl: 'angular/templates/newborn/index.html',
        controller: 'NewbornController'
      })
      .state('root.infant', {
        url: 'lactante',
        templateUrl: 'angular/templates/infant/index.html',
        controller: 'InfantController'
      })
      .state('root.preschool', {
        url: 'preescolar',
        templateUrl: 'angular/templates/preschool/index.html',
        controller: 'PreschoolController'
      })
      .state('root.scholar', {
        url: 'escolar',
        templateUrl: 'angular/templates/scholar/index.html',
        controller: 'ScholarController'
      })
      .state('root.teenager', {
        url: 'adolescente',
        templateUrl: 'angular/templates/teenager/index.html',
        controller: 'TeenagerController'
      })
      .state('root.adult', {
        url: 'adulto',
        templateUrl: 'angular/templates/adult/index.html',
        controller: 'AdultController'
      })
      .state('root.elderly', {
        url: 'adulto_mayor',
        templateUrl: 'angular/templates/elderly/index.html',
        controller: 'ElderlyController'
      })
      .state('root.predialytic', {
        url: 'predialitico',
        templateUrl: 'angular/templates/predialytic/index.html',
        controller: 'PredialyticController'
      })
      .state('root.dialysis', {
        url: 'dialisis',
        templateUrl: 'angular/templates/dialysis/index.html',
        controller: 'DialysisController'
      })
      .state('root.hemodialysis', {
        url: 'hemodialisis',
        templateUrl: 'angular/templates/hemodialysis/index.html',
        controller: 'HemodialysisController'
      });
  }]);


nutrisol.run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.currentSection = $state.current.name;
    });
}]);
