(function(){

  angular.module('services').service('predialysisFormulas', function() {
    return {
      idealWeightMen: function(height) {
        //50+0.91(talla en cm - 152.4)
        return 50 + 0.91 * (height - 152.4);
      },

      idealWeightWomen: function(height) {
        //45.5+0.91(talla cm - 152.4)
        return 45.5 + 0.91 * (height - 152.4);
      },

      dryWeight: function(actualWeight, idealWeight) {
        //actualWeight kg  + ((idealWeight kg - actualWeight kg) * 0.25)
        return actualWeight + ((idealWeight - actualWeight) * 0.25);
      },

      bmi: function(height, weight) {
        //bmi = weight / height^2
        //where weight is in kg & height is in meters

        var heightInMeters = height / 100;
        return weight / (Math.pow(heightInMeters, 2));
      },

      waistHipsIndex: function(waist, hips) {
        //ICC= waist circumference cm / hips circumference cm
        return waist / hips
      },

      kcal: function(weight, kcal) {
        //Kcal = weight * kcal
        return weight * kcal;
      },

      proteins: function(weight, proteinsPerKg) {
        //proteins = weight * proteinsPerKg
        return weight * proteinsPerKg;
      }
    };

  });

})();
