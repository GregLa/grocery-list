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
                id : 0,
                name : 'Courgettes',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/courgette/courgette_346_346_filled.jpg',
                alimentary_group : 'Légumes'
            },
            {
                id : 1,
                name : 'Tomate',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/tomate/tomate_-_copie_346_346_filled.jpg',
                alimentary_group : 'Légumes'
            },
            {
                id : 2,
                name : 'Thym',
                img : 'http://www.lesfruitsetlegumesfrais.com/_upload/cache/ressources/produits/herbes_fraiches/herbes_fraiches_346_346_filled.jpg',
                alimentary_group : 'Épices'
            }
        ];

        var service = {
            ingredient_list : ingredient_list,
            addOrUpdateIngredient : addOrUpdateIngredient,
            getIngredient : getIngredient,
            deleteIngredient : deleteIngredient
        };

        return service;

        ////////////////

        function addOrUpdateIngredient(ingredient){
            if(ingredient.id == null){
                ingredient.id = ingredient.length + 1;
                ingredient_list.push(ingredient);
            } else {
                var ingredient_to_update =_.find(ingredient_list, { id : ingredient.id });
                ingredient_to_update.name = ingredient.name;
                ingredient_to_update.img = ingredient.img;
                ingredient_to_update.alimentary_group = ingredient.alimentary_group;
            }
        }

        function getIngredient(ingredient_id){
            return _.find(ingredient_list, { id : ingredient_id });
        }

        function deleteIngredient(ingredient_id){
            _.remove(ingredient_list, _.find(ingredient_list, {id : ingredient_id}));
        }
    }

})();

