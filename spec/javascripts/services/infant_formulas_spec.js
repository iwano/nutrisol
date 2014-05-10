'use strict';

xdescribe('infantFormulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(infantFormulas) {
    Formulas = infantFormulas;
  }));

  describe('#ped', function() {
    it('calculates the percentage of weight according to age correctly', function() {
      expect(Formulas.ped()).toEqual();
    });
  });

  describe('#le', function() {
    it('calculates the percentage of height according to age', function() {
      expect(Formulas.le()).toEqual();
    });
  });

  describe('#pl', function() {
    it('calculates the percentage of weight according to height', function() {
      expect(Formulas.pl()).toEqual();
    });
  });

});

