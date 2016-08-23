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
        ////////////////

        function showCreateOrUpdateIngredients(ev) {
            $mdDialog.show({
                controller: 'IngredientsCreateUpdate',
                controllerAs: 'vm',
                templateUrl: TEMPLATE_URL + 'ingredients/ingredients.create_update.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:false
            })
            .then(function(ingredient) {
                console.log(ingredient);
                Ingredients.addIngredient(ingredient);
            }, function() {
                console.log('cancelled');
            });
        }
    }

})();

