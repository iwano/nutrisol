'use strict';

/* App Modules */

var nutrisolControllers = angular.module('controllers', []);
var nutrisolDirectives  = angular.module('directives', []);
var nutrisolServices    = angular.module('services', []);
var nutrisolTemplates   = angular.module('templates', []);

var nutrisol = angular.module('nutrisol', [
  'controllers',
  'directives',
  'services',
  'templates',
  'ui.bootstrap',
  'ncy-angular-breadcrumb',
  'ui.router',
  'ngTouch',
  'ngAnimate'
]);

