'use strict';

describe('newbornFormulas', function() {
  var Formulas;

  beforeEach(module('services'));
  beforeEach(inject(function(newbornFormulas) {
    Formulas = newbornFormulas;
  }));

  describe('#reeBreast', function() {
    it('calculates the estimated energy requirement correctly', function() {
      expect(Formulas.reeBreast(3.25)).toEqual(345.59999999999997);
    });
  });

  describe('#reeSubstitute', function() {
    it('calculates the estimated energy requirement correctly', function() {
      expect(Formulas.reeSubstitute(3.25)).toEqual(435.45);
    });
  });

});

