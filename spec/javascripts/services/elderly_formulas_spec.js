'use strict';

describe('elderlyFormulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(elderlyFormulas) {
    Formulas = elderlyFormulas;
  }));

  describe('#t', function() {
    it('calculates the tallness correctly', function() {
      expect(Formulas.t(90)).toEqual(180);
    });
  });

  describe('#bmi', function() {
    it('calculates the body mass index correctly', function() {
      expect(Formulas.bmi(187, 81)).toEqual(23.163373273470786);
    });
  });

  describe('#cc', function() {
    it('calculates the body complexion correctly', function() {
      expect(Formulas.cc(56, 159)).toEqual(0.3522012578616352);
    });
  });

  describe('#gctMen', function() {
    it('calculates the body fat percentage for men correclty', function() {
      expect(Formulas.gctMen(24.03, 65)).toEqual(27.586000000000006);
    });
  });

  describe('#gctWomen', function() {
    it('calculates the body fat percentage for women correclty', function() {
      expect(Formulas.gctWomen(24.03, 65)).toEqual(38.386);
    });
  });

  describe('#gerMen', function() {
    it('calculates the energy expenditure for men correctly', function() {
      expect(Formulas.gerMen(55.8)).toEqual(1241.1738);
    });
  });

  describe('#gerWomen', function() {
    it('calculates the energy expenditure for women correctly', function() {
      expect(Formulas.gerWomen(55.8)).toEqual(1165.2756);
    });
  });

  describe('#ree', function() {
    it('calculates the percentage of total body fat form women correctly', function() {
      expect(Formulas.ree(1165, 1.54)).toEqual(1794.1000000000001);
    });
  });
});

