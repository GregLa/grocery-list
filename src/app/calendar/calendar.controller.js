(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('Calendar', Calendar);

    // Calendar.$inject = [''];

    /* @ngInject */
    function Calendar() {
        var vm = this;
        vm.title = 'Calendar';

        activate();

        ////////////////

        function activate() {

        }
    }

})();

