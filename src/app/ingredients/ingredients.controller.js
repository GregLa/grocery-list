(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('Ingredients', Ingredients);

    // Ingredients.$inject = [''];

    /* @ngInject */
    function Ingredients() {
        var vm = this;
        vm.title = 'Ingredients';

        activate();

        ////////////////

        function activate() {

        }
    }

})();

