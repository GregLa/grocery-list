(function () {
    'use strict';

    angular
        .module('grocery-list')
        .controller('IngredientsCreateUpdate', IngredientsCreateUpdate);

    IngredientsCreateUpdate.$inject = ['$scope', '$mdDialog', 'AlimentaryGroups', 'ingredient'];

    /* @ngInject */
    function IngredientsCreateUpdate($scope, $mdDialog, AlimentaryGroups, ingredient) {

        var vm = this;

        if(ingredient != null){
            vm.id = ingredient.id;
            vm.name = ingredient.name;
            vm.img = ingredient.img;
            vm.alimentary_group = ingredient.alimentary_group;
        } else {
            vm.id = null;
            vm.name = '';
            vm.img = '';
            vm.alimentary_group = '';
        }

        vm.alimentary_groups = AlimentaryGroups.list;

        ////////////////

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function() {

            if( vm.name != '' && vm.alimentary_group != ''){
                var ingredient = {
                    id : vm.id,
                    name : vm.name,
                    img : vm.img,
                    alimentary_group : vm.alimentary_group
                };

                $mdDialog.hide(ingredient);
            } else {
                $mdDialog.cancel();
            }

        };

    }

})();


