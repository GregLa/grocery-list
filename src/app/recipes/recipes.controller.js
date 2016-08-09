(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('Recipes', Recipes);

    // Recipes.$inject = [''];

    /* @ngInject */
    function Recipes() {
        var vm = this;
        vm.title = 'Recipes';

        activate();

        ////////////////

        function activate() {

        }
    }

})();

