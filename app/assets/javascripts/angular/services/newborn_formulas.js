(function(){

  angular.module('services').service('newbornFormulas', function() {
    return {
      reeBreast: function(weight) {
        //REE= ((92.8 * weight) - 152.0) + 196
        return ((92.8 * weight) - 152.0) + 196;
      },

      reeSubstitute: function(weight) {
        //REE= ((82.6 * weight) -29.0) + 196
        return ((82.6 * weight) - 29.0) + 196;
      }
    };

  });

})();
