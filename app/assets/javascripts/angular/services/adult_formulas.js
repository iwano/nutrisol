(function(){

  angular.module('services').service('adultFormulas', function() {
    return {
      bmi: function(height, weight) {
        //bmi = weight / height^2
        //where weight is in kg & height is in meters

        var heightInMeters = height / 100;
        return weight / (Math.pow(heightInMeters, 2));
      },

      tmbMen: function(age, height, weight) {
        //tbm for men = 66.4730 + (13.7516 * weight) + (5.0033 * height) - (6.7550 * age)
        //where weight is in kg & height in cm

        return 66.4730 + (13.7516 * weight) + (5.0033 * height) - (6.7550 * age);
      },

      tmbWomen: function(age, height, weight) {
        //tbm for women = 655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age)
        //where weight is in kg & height in cm

        return 655.0955 + (9.5634 * weight) + (1.8496 * height) - (4.6756 * age);
      },

      totalCalories: function(tmb, physicalActivityPercentage) {
        //totalCalories = calories + 10% of calories + physical Activity percentage

        var extra = tmb * 10 / 100;
        var physicalActPerc = tmb * physicalActivityPercentage / 100;
        return tmb + extra + physicalActivityPercentage;
      },

      idealWeightMen: function(height) {
        //50+0.91(talla en cm - 152.4)
        return 50 + 0.91 * (height - 152.4);
      },

      idealWeightWomen: function(height) {
        //45.5+0.91(talla cm - 152.4)
        return 45.5 + 0.91 * (height - 152.4);
      },

      cc: function(height, wrist) {
        //CC= height cm / wrist circumference cm
        return height / wrist
      },

      icc: function(waist, hips) {
        //ICC= waist circumference cm / hips circumference cm
        return waist / hips
      },

      agia: function(age, waist) {
        //AGIA cm2= (2.125 * age)+ (2.843* waist circumference) - 225.39
        return (2.125 * age) + (2.843 * waist) - 225.39;
      },

      actMen: function(height, weight, age) {
        //(-0.09516 * age) + (0.1074 * height) + (0.3362 * weight kg) + 2.447
        return (-0.09516 * age) + (0.1074 * height) + (0.3362 * weight) + 2.447;
      },

      actWomen: function(height, weight) {
        //(0.1069 * height) + (0.2466 * weight) - 2.097
        return (0.1069 * height) + (0.2466 * weight) - 2.097;
      },

      gctMen: function(height, imc) {
        //GCT kg=(0.715 * IMCkg / m2) - 12.1 * height m2
        var height2 = Math.pow((height / 100), 2);
        return ((0.715 * imc) - 12.1) * height2;
      },

      gctWomen: function(height, imc) {
        //GCT kg=(0.713 * IMC kg/m2) - 9.74 * Talla m2
        var height2 = Math.pow((height / 100), 2);
        return ((0.713 * imc) - 9.74) * height2;
      },

      mlg: function(weight, gct) {
        //MLG kg= weight - GCTkg
        return weight - gct;
      },

      gctPercentageMen: function(age, waist) {
        //%GCT= (0.567 * waist circumference cm)+ (0.101 * age) - 31.8
        return (0.567 * waist) + (0.101 * age) - 31.8;
      },

      gctPercentageWomen: function(age, waist) {
        //%GCT= (0.439 * waist circumference cm) + (0.221 * age) - 9.4
        return (0.439 * waist) + (0.221 * age) - 9.4;
      }
    };

  });

})();


