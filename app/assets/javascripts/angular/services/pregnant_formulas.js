(function(){

  angular.module('services').service('pregnantFormulas', function() {
    return {
      bmi: function(height, weight) {
        //bmi = weight / height^2
        //where weight is in kg & height is in meters

        var heightInMeters = height / 100;
        return weight / (Math.pow(heightInMeters, 2));
      },

      PeIMCpgEg: function(bmi, numberOfWeeks, weightBeforePregnancy) {
        //where bmi is in kg/m2 & weightbeforepregnancy is in kg

        if (bmi < 18.5) {
          return weightBeforePregnancy + (0.322 * numberOfWeeks);
        } else if (bmi >= 18.5 && bmi <= 24) {
          return weightBeforePregnancy + (0.267 * numberOfWeeks);
        } else if (bmi > 24 && bmi <= 29.9) {
          return weightBeforePregnancy + (0.237 * numberOfWeeks);
        } else if (bmi > 29.9) {
          return weightBeforePregnancy + (0.138 * numberOfWeeks);
        } else {
          return 0;
        }

      }
    };

  });

})();
