(function(){

  angular.module('services').service('GeneralFormulas', function() {
    return {
      rationsByGroup: function() {
        return {
          vegetables: {
            kcal: 25,
            proteins: 2,
            lipids: 0,
            hc: 4
          },

          fruits: {
            kcal: 60,
            proteins: 0,
            lipids: 0,
            hc: 15
          },

          grains: {
            without_fat: {
              kcal: 70,
              proteins: 0,
              lipids: 0,
              hc: 15
            },
            with_fat: {
              kcal: 115,
              proteins: 2,
              lipids: 5,
              hc: 15
            }
          },

          legumes: {
            kcal: 120,
            proteins: 8,
            lipids: 1,
            hc: 20
          },

          animal_source: {
            very_low_fat: {
              kcal: 40,
              proteins: 7,
              lipids: 1,
              hc: 0
            },
            low_fat: {
              kcal: 55,
              proteins: 7,
              lipids: 3,
              hc: 0
            },
            moderated_fat: {
              kcal: 75,
              proteins: 7,
              lipids: 5,
              hc: 0
            },
            high_fat: {
              kcal: 100,
              proteins: 7,
              lipids: 8,
              hc: 0
            },
          },

          milk: {
            skim: {
              kcal: 95,
              proteins: 9,
              lipids: 2,
              hc: 12
            },
            semiskim: {
              kcal: 110,
              proteins: 9,
              lipids: 4,
              hc: 12
            },
            whole: {
              kcal: 150,
              proteins: 9,
              lipids: 8,
              hc: 12
            },
            sugary: {
              kcal: 200,
              proteins: 8,
              lipids: 5,
              hc: 30
            },
          },

          fats_and_oils: {
            without_proteins: {
              kcal: 45,
              proteins: 0,
              lipids: 5,
              hc: 15
            },
            with_proteins: {
              kcal: 70,
              proteins: 3,
              lipids: 5,
              hc: 3
            }
          },

          sugars: {
            without_fat: {
              kcal: 40,
              proteins: 0,
              lipids: 0,
              hc: 10
            },
            with_fat: {
              kcal: 85,
              proteins: 0,
              lipids: 5,
              hc: 10
            }
          }
        }
      },

      rationsTotalsByGroup: function() {
        return {
          vegetables: {
            rations: 1,
            kcal: 25,
            proteins: 2,
            lipids: 0,
            hc: 4
          },

          fruits: {
            rations: 1,
            kcal: 60,
            proteins: 0,
            lipids: 0,
            hc: 15
          },

          grains: {
            without_fat: {
              rations: 1,
              kcal: 70,
              proteins: 0,
              lipids: 0,
              hc: 15
            },
            with_fat: {
              rations: 1,
              kcal: 115,
              proteins: 2,
              lipids: 5,
              hc: 15
            }
          },

          legumes: {
            rations: 1,
            kcal: 120,
            proteins: 8,
            lipids: 1,
            hc: 20
          },

          animal_source: {
            very_low_fat: {
              rations: 1,
              kcal: 40,
              proteins: 7,
              lipids: 1,
              hc: 0
            },
            low_fat: {
              rations: 1,
              kcal: 55,
              proteins: 7,
              lipids: 3,
              hc: 0
            },
            moderated_fat: {
              rations: 1,
              kcal: 75,
              proteins: 7,
              lipids: 5,
              hc: 0
            },
            high_fat: {
              rations: 1,
              kcal: 100,
              proteins: 7,
              lipids: 8,
              hc: 0
            },
          },

          milk: {
            skim: {
              rations: 1,
              kcal: 95,
              proteins: 9,
              lipids: 2,
              hc: 12
            },
            semiskim: {
              rations: 1,
              kcal: 110,
              proteins: 9,
              lipids: 4,
              hc: 12
            },
            whole: {
              rations: 1,
              kcal: 150,
              proteins: 9,
              lipids: 8,
              hc: 12
            },
            sugary: {
              rations: 1,
              kcal: 200,
              proteins: 8,
              lipids: 5,
              hc: 30
            },
          },

          fats_and_oils: {
            without_proteins: {
              rations: 1,
              kcal: 45,
              proteins: 0,
              lipids: 5,
              hc: 15
            },
            with_proteins: {
              rations: 1,
              kcal: 70,
              proteins: 3,
              lipids: 5,
              hc: 3
            }
          },

          sugars: {
            without_fat: {
              rations: 1,
              kcal: 40,
              proteins: 0,
              lipids: 0,
              hc: 10
            },
            with_fat: {
              rations: 1,
              kcal: 85,
              proteins: 0,
              lipids: 5,
              hc: 10
            }
          }
        }
      }
    }

  });

})();
