(function () {
    'use strict';
    angular
        .module('grocery-list')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', 'TEMPLATE_URL'];

    /* @ngInject */
    function config($stateProvider, $urlRouterProvider, TEMPLATE_URL) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('root', {
                url: '',
                abstract: true,
                views: {
                    'leftnav':{
                        templateUrl : TEMPLATE_URL + 'layout/leftnav.html',
                        controller : 'LeftNavigation',
                        controllerAs : 'vm'
                    },
                    'topnav':{
                        templateUrl : TEMPLATE_URL + 'layout/topnav.html',
                        controller : 'TopNavigation',
                        controllerAs : 'vm'
                    }
                }
            })
        ;
    }
})();
