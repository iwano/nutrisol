nutrisol.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }]);


nutrisol.run(['$rootScope', '$state', 'FamousQuotes', function($rootScope, $state, FamousQuotes) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.$state = $state;
      $rootScope.currentQuote = FamousQuotes[Math.floor((Math.random() * FamousQuotes.length))];
      $rootScope.currentTemplateFolder = $state.current.name.split('.')[1];
      $rootScope.sidebarToggle = false;
    });
}]);
