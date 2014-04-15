'use strict';

describe('IndexController', function() {
  var $scope, $modal;

  describe('#openAboutModal', function() {

    beforeEach(inject(function($controller, _$modal_, $rootScope) {
      $modal = _$modal_;
      $scope = $rootScope.$new();
      spyOn($modal, 'open');
      $controller('IndexController', {
        $scope: $scope
      });
    }));

    it('opens the about modal', function() {
      $scope.openAboutModal();
      expect($modal.open).toHaveBeenCalled();
    });
  });

});
