'use strict';

describe('Formulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(_Formulas_) {
    Formulas = _Formulas_;
  }));

  describe('#bmi', function() {
    it('calculates the body mass index correctly', function() {
      expect(Formulas.bmi(187, 81)).toEqual(23.163373273470786);
    });
  });

  describe('#tmbMen', function() {
    it('calculates the tasal metabolic rate for men correctly', function() {
      expect(Formulas.tmbMen(23, 187, 81)).toEqual(1960.6047);
    });
  });

  describe('#tmbWomen', function() {
    it('calculates the tasal metabolic rate for women correctly', function() {
      expect(Formulas.tmbWomen(23, 187, 81)).toEqual(1668.0673);
    });
  });
});
