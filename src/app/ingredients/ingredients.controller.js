(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('IngredientsCtrl', IngredientsCtrl);

    IngredientsCtrl.$inject = ['Ingredients', '$mdDialog', 'TEMPLATE_URL'];

    /* @ngInject */
    function IngredientsCtrl(Ingredients, $mdDialog, TEMPLATE_URL) {
        var vm = this;
        vm.title = 'Ingredients';
        vm.ingredients = Ingredients.ingredient_list;

        vm.showCreateOrUpdateIngredients = showCreateOrUpdateIngredients;
        vm.deleteIngredient = deleteIngredient;

        ////////////////

        function showCreateOrUpdateIngredients(ev, ingredient_id) {

            var configuration = {
                controller: 'IngredientsCreateUpdate',
                controllerAs: 'vm',
                templateUrl: TEMPLATE_URL + 'ingredients/ingredients.create_update.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false,
                resolve : {
                    ingredient : function(){
                        return null;
                    }
                }
            };

            if( ingredient_id != null) {
                configuration.resolve = {
                    ingredient : function () {
                        return Ingredients.getIngredient(ingredient_id)
                    }
                }
            }

            $mdDialog.show(configuration)
            .then(function(ingredient) {
                Ingredients.addOrUpdateIngredient(ingredient);
            }, function() {
                console.log('cancelled');
            });
        }

        function deleteIngredient(ingredient_id) {
            Ingredients.deleteIngredient(ingredient_id);
        }
    }

})();

