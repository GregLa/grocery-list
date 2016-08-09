(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$mdDialog'];

    /* @ngInject */
    function HomeController($mdDialog) {
        var vm = this;

        vm.title = 'HomeController';
        vm.launchDialog = launchDialog;

        activate();

        ////////////////

        function activate() {
            // Controller initialization goes here
        }

        function launchDialog(){
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Dialog')
                    .textContent('Hello !')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!')
            );
        }
    }

})();

