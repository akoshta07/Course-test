(function(){
'use strict';

angular.module('data')
.controller('MenuDataController',MenuDataController);

/*
MenuDataController.$inject = ['MenuDataService'];
function MenuDataController(MenuDataService){
    var menuController = this;
    menuController.categories = MenuDataService.getAllCategories();
}
*/
MenuDataController.$inject=['categories'];
function MenuDataController(categories){
    var menuController=this;
    menuController.categories=categories;
}
})();