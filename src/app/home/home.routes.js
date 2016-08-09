(function () {
    'use strict';

    angular
        .module('grocery-list')
        .run(appRun);

    appRun.$inject = ['routerHelper', 'TEMPLATE_URL'];

    /* @ngInject */
    function appRun(routerHelper, TEMPLATE_URL) {
        routerHelper.configureStates(getStates(TEMPLATE_URL));
    }

    function getStates(TEMPLATE_URL) {
        return [
            {
                state: 'root.home',
                config: {
                    url: '/',
                    views: {
                        'content@' : {
                            templateUrl: TEMPLATE_URL + 'home/home.html',
                            controller: 'HomeController',
                            controllerAs: 'vm'
                        }
                    }
                }
            }
        ];
    }
})();