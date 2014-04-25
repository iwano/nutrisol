'use strict';

describe('predialysisFormulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(predialysisFormulas) {
    Formulas = predialysisFormulas;
  }));

  describe('#bmi', function() {
    it('calculates the body mass index correctly', function() {
      expect(Formulas.bmi(187, 81)).toEqual(23.163373273470786);
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

  describe('#waistHipsIndex', function() {
    it('calculates the body fat distribution correctly', function() {
      expect(Formulas.waistHipsIndex(95, 110)).toEqual(0.8636363636363636);
    });
  });

  describe('#dryWeight', function() {
    it('calculates the dry weight correctly', function() {
      expect(Formulas.dryWeight(80.1, 70.566)).toEqual(77.7165);
    });
  });

  describe('#kcal', function() {
    it('calculates the number of calories needed', function() {
      expect(Formulas.kcal(72, 35)).toEqual(2520);
    });
  });

  describe('#proteins', function() {
    it('calculates the number of proteins needed', function() {
      expect(Formulas.proteins(72, .8)).toEqual(57.6);
    });
  });

});

