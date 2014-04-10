'use strict';

/* App Modules */

var nutrisolControllers = angular.module('nutrisolControllers', []);
var nutrisolDirectives  = angular.module('nutrisolDirectives', []);
var nutrisolServices    = angular.module('nutrisolServices', []);

var nutrisol = angular.module('nutrisol', [
  'ngRoute',

  'nutrisolController',
  'nutrisolDirectives',
  'nutrisolServices'
]);

