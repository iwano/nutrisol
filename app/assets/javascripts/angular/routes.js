nutrisol.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

  }]);


nutrisol.run(['$rootScope', '$state', 'FamousQuotes', function($rootScope, $state, FamousQuotes) {
  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams){
      $rootScope.currentSection = $state.current.name;
      $rootScope.currentQuote = FamousQuotes[Math.floor((Math.random() * FamousQuotes.length))];
      $rootScope.currentTemplateFolder = $rootScope.currentSection.split('.')[1];
      $rootScope.sidebarToggle = false;
    });
}]);
