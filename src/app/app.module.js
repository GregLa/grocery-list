(function () {
    'use strict';

    angular
        .module('grocery-list', [
            'ngMaterial',
            'ui.router'
        ])
        .constant('TEMPLATE_URL', '/app/');

})();