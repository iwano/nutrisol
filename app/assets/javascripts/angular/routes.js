nutrisol.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
      state('root', {
        url: '',
        templateUrl: 'angular/templates/index.html',
        controller: 'IndexController'
      })
      .state('root.embarazo', {
        url: '/embarazo',
        templateUrl: 'angular/templates/pregnant/index.html',
        controller: 'PregnantController'
      })
      .state('root.recien_nacido', {
        url: '/recien_nacido',
        templateUrl: 'angular/templates/newborn/index.html',
        controller: 'NewbornController'
      })
      .state('root.lactante', {
        url: '/lactante',
        templateUrl: 'angular/templates/infant/index.html',
        controller: 'InfantController'
      })
      .state('root.preescolar', {
        url: '/preescolar',
        templateUrl: 'angular/templates/preschool/index.html',
        controller: 'PreschoolController'
      })
      .state('root.escolar', {
        url: '/escolar',
        templateUrl: 'angular/templates/scholar/index.html',
        controller: 'ScholarController'
      })
      .state('root.adolescente', {
        url: '/adolescente',
        templateUrl: 'angular/templates/teenager/index.html',
        controller: 'TeenagerController'
      })
      .state('root.adulto', {
        url: '/adulto',
        templateUrl: 'angular/templates/adult/index.html',
        controller: 'AdultController'
      })
      .state('root.adulto_mayor', {
        url: '/adulto_mayor',
        templateUrl: 'angular/templates/elderly/index.html',
        controller: 'ElderlyController'
      })
      .state('root.predialitico', {
        url: '/predialitico',
        templateUrl: 'angular/templates/predialytic/index.html',
        controller: 'PredialyticController'
      })
      .state('root.dialisis', {
        url: '/dialisis',
        templateUrl: 'angular/templates/dialysis/index.html',
        controller: 'DialysisController'
      })
      .state('root.hemodialisis', {
        url: '/hemodialisis',
        templateUrl: 'angular/templates/hemodialysis/index.html',
        controller: 'HemodialysisController'
      });
  }]);
