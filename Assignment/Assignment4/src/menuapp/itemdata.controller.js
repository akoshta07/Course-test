(function () {
    'use strict';

    angular.module('data')
    .controller('ItemDataController', ItemDataController);

    
    /*
    ItemDataController.$inject = ['$stateParams','MenuDataService'];
    function ItemDataController($stateParams,MenuDataService){
        var itemController = this;
        itemController.items = MenuDataService.getItemsForCategory($stateParams.short_name);
    }*/
    
    ItemDataController.$inject = ['items'];
    function ItemDataController(items) {
        var itemController = this;
        itemController.items = items;
    }
    
})();