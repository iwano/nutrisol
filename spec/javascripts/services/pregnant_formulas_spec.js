'use strict';

describe('pregnantFormulas', function() {
  var Formulas;

  beforeEach(inject(function(pregnantFormulas) {
    Formulas = pregnantFormulas;
  }));

  describe('.bmi', function() {
    it('calculates the bmi correctly', function() {
      expect(Formulas.bmi(187, 81)).toEqual(23.163373273470786);
    });
  });

  describe('.PeIMCpgEg', function() {
    it('calculates the PeIMCpgEg correctly', function() {
      expect(Formulas.PeIMCpgEg(23.163373273470786, 6, 81)).toEqual(82.602);
    });
  });

  describe('.totalCaloriesTeenager', function() {
    it('calculates the calories correctly', function() {
      expect(Formulas.totalCaloriesTeenager(56, 5)).toEqual(2501.4559999999997);
    });
  });

  describe('.totalCaloriesAdult', function() {
    it('calculates the calories correctly', function() {
      expect(Formulas.totalCaloriesAdult(60, 1.5, 285, 20)).toEqual(2348.5199999999995);
    });
  });

  describe('.totalCaloriesAdult', function() {
    it('calculates the calories correctly', function() {
      expect(Formulas.totalCaloriesAdult(60, 1.5, 285, 38)).toEqual(2284.74);
    });
  });
});
