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
});
