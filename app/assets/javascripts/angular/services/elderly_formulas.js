(function(){

  angular.module('services').service('elderlyFormulas', function() {
    return {
      t: function(height) {
        //Tcm= armspan cm * 2

        return height * 2;
      },

      cc: function(elbowWidth, height) {
        //CC= elbow width mm/ height cm

        return elbowWidth / height
      },

      bmi: function(height, weight) {
        //bmi = weight / height^2
        //where weight is in kg & height is in meters

        var heightInMeters = height / 100;
        return weight / (Math.pow(heightInMeters, 2));
      },

      gctMen: function(bmi, age) {
        //%GCT= (1.20 * BMI) + (0.23 * age) - (10.8 * 1) - 5.4

        return(1.20 * bmi) + (0.23 * age) - (10.8 * 1) - 5.4;
      },

      gctWomen: function(bmi, age) {
        //%GCT= (1.20 * BMI) + (0.23 * age) - (10.8 * 0) - 5.4

        return(1.20 * bmi) + (0.23 * age) - (10.8 * 0) - 5.4;
      },

      gerMen: function(weight) {
        //GER=(11.711 * weight kg) + 587.7

        return (11.711 * weight) + 587.7;
      },

      gerWomen: function(weight) {
        //GER=(9.082 * weight kg) + 658.5

        return (9.082 * weight) + 658.5;
      },

      ree: function(ger, naf) {
        //REE= GER*NAF

        return ger * naf;
      }

    };

  });

})();
