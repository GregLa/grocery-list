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
                state: 'root.recipes',
                config: {
                    url: '/recipes',
                    views: {
                        'content@' : {
                            templateUrl: TEMPLATE_URL + 'recipes/recipes.html',
                            controller: 'Recipes',
                            controllerAs: 'vm'
                        }
                    }
                }
            }
        ];
    }
})();