(function () {
    'use strict';

    angular
        .module('grocery-list')
        .service('Ingredients', Ingredients);

    // Ingredients.$inject = [''];

    /* @ngInject */
    function Ingredients() {

         var empty_ingredients = {
            name : '',
            alimentary_group : ''
        };

        var alimentary_group = [
            'Fruits', 'Légumes', 'Viandes', 'Produits Laitiers', 'Charcuterie', 'Poisson', 'Féculents', 'Céréales', 'Oeufs', 'Épices', 'Sucres'
        ];

        var ingredient_list = [
            {
                name : 'Courgettes',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/courgette/courgette_346_346_filled.jpg',
                alimentary_group : 'Légumes'
            },
            {
                name : 'Tomate',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',
                alimentary_group : 'Légumes'
            },
            {
                name : 'Thym',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/herbes_fraiches/herbes_fraiches_346_346_filled.jpg',
                alimentary_group : 'Épices'
            }
        ];

        var service = {
            ingredient_list : ingredient_list,
            addIngredient : addIngredient
        };

        return service;

        ////////////////

        function addIngredient(ingredient){
            ingredient_list.push(ingredient);
        }
    }

})();

