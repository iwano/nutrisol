(function(){

  angular.module('services').service('dialysisFormulas', function() {
    return {
      kcal: function(weight, kcal) {
        //Kcal = weight * kcal
        return weight * kcal;
      },

      proteins: function(weight, proteinsPerKg) {
        //proteins = weight * proteinsPerKg
        return weight * proteinsPerKg;
      },

      dialysisHC: function(numberOfBags, dialysisPercentage, bagLiters) {
        var ghcBag =  ((bagLiters * 1000) * dialysisPercentage) / 100;
        return ghcBag * numberOfBags;
      },

      dialysisHCkcal: function(totalHC) {
        return totalHC * 4;
      }
    };

  });

})();
