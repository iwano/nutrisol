nutrisol.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'angular/templates/index.html',
        controller: 'IndexController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
