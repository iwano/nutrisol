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
      }
    };

  });

})();


