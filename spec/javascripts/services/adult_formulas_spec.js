'use strict';

describe('adultFormulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(adultFormulas) {
    Formulas = adultFormulas;
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

  describe('#idealWeightMen', function() {
    it('calculates the ideal weight for men correctly', function() {
      expect(Formulas.idealWeightMen(160)).toEqual(56.916);
    });
  });

  describe('#idealWeightWomen', function() {
    it('calculates the ideal weight for women correctly', function() {
      expect(Formulas.idealWeightWomen(160)).toEqual(52.416);
    });
  });

  describe('#cc', function() {
    it('calculates the body complexion correctly', function() {
      expect(Formulas.cc(159, 14)).toEqual(11.357142857142858);
    });
  });

  describe('#icc', function() {
    it('calculates the body fat distribution correctly', function() {
      expect(Formulas.icc(72.2, 111.5)).toEqual(0.6475336322869956);
    });
  });

  describe('#agia', function() {
    it('calculates the intraabdominal fat correctly', function() {
      expect(Formulas.agia(45, 73)).toEqual(77.774);
    });
  });

  describe('#actMen', function() {
    it('calculates the total body water for men correctly', function() {
      expect(Formulas.actMen(160, 48, 23)).toEqual(33.57992);
    });
  });

  describe('#actWomen', function() {
    it('calculates the total body water for women correctly', function() {
      expect(Formulas.actWomen(170, 70.6)).toEqual(33.48596);
    });
  });

  describe('#gctMen', function() {
    it('calculates the total body mass for men correctly', function() {
      expect(Formulas.gctMen(168, 26.4)).toEqual(19.12458239999999);
    });
  });

  describe('#gctWomen', function() {
    it('calculates the total body mass for women correctly', function() {
      expect(Formulas.gctWomen(160, 18.749999999999996)).toEqual(9.289599999999993);
    });
  });

  describe('#mlg', function() {
    it('calculates the fat-free mass correctly', function() {
      expect(Formulas.mlg(74.5, 19.1)).toEqual(55.4);
    });
  });

  describe('#gctPercentageMen', function() {
    it('calculates the percentage of total body fat form men correctly', function() {
      expect(Formulas.gctPercentageMen(42, 93)).toEqual(25.17299999999999);
    });
  });

  describe('#gctPercentageWomen', function() {
    it('calculates the percentage of total body fat form women correctly', function() {
      expect(Formulas.gctPercentageWomen(23, 65)).toEqual(24.218000000000004);
    });
  });

  xdescribe('#totalCalories', function() {
    it('calculates the total of calories needed correctly', function() {
      expect(Formulas.totalCalories()).toEqual();
    });
  });
});

