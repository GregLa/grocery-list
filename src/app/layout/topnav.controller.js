(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('TopNavigation', TopNavigation);

    // TopNavigation.$inject = [''];

    /* @ngInject */
    function TopNavigation() {
        var vm = this;
        vm.title = 'Grocery List Manager';

        activate();

        ////////////////

        function activate() {
            // Controller initialization goes here
        }
    }

})();

