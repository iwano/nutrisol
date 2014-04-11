'use strict';

describe('IndexController', function() {
  var scope

  beforeEach(module('controllers'));
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('IndexController', {
      $scope: scope
    });
  }));

  it('can set value for scope', function() {
    expect(scope.title).toEqual('such nutriments');
  });
});
