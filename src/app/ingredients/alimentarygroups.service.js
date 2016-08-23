(function () {
    'use strict';

    angular
        .module('grocery-list')
        .service('AlimentaryGroups', AlimentaryGroups);

    // AlimentaryGroups.$inject = [''];

    /* @ngInject */
    function AlimentaryGroups() {

        var alimentary_group = [
            'Fruits', 'Légumes', 'Viandes', 'Produits Laitiers', 'Charcuterie', 'Poisson', 'Féculents', 'Céréales', 'Oeufs', 'Épices', 'Sucres'
        ];

        var service = {
            list : alimentary_group
        };

        return service;

    }

})();

