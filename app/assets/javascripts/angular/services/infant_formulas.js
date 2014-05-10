(function(){

  angular.module('services').service('infantFormulas', function() {
    return {
      ped: function(weight, referenceWeight) {
        //%PEd = real weight kg / reference weight kg * 100
        return weight / referenceWeight * 100;
      },

      le: function(height, referenceHeight) {
        //%LE = height cm/ reference height cm * 100
        return height / referenceHeight * 100;
      },

      pl: function(bmi, referenceBmi) {
        //%PL= BMI kg/m2 / reference BMI kg/m2 *100
        return bmi / referenceBmi * 100;
      }
    };

  });

})();
