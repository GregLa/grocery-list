(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('IngredientsCreateUpdate', IngredientsCreateUpdate);

    IngredientsCreateUpdate.$inject = ['$scope', '$mdDialog', 'AlimentaryGroups'];

    /* @ngInject */
    function IngredientsCreateUpdate($scope, $mdDialog, AlimentaryGroups) {
        var vm = this;
        
        vm.name = '';
        vm.img = '';
        vm.alimentary_group = '';
        vm.alimentary_groups = AlimentaryGroups.list;

        ////////////////

        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.answer = function() {
            var ingredient = {
                name : vm.name,
                img : vm.img,
                alimentary_group : vm.alimentary_group
            };
            $mdDialog.hide(ingredient);
        };

    }

})();


