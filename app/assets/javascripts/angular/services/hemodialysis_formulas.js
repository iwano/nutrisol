(function(){

  angular.module('services').service('hemodialysisFormulas', function() {
    return {
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
