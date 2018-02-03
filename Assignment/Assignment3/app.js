(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('founditem',FoundListDirective);

function FoundListDirective(){
  var ddo={
    templateUrl:'foundItems.html',
    scope:{
      found : '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){

  var found=[];
  var list=this;
  
  list.item='';
 
  var service=MenuSearchService;

  list.getMatchedMenuItems = function(){
    found = service.getMatchedMenuItems(list.item);
  };
  
  list.onRemove= function(itemIndex){
    found.splice(itemIndex,1);
  };
}

MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

  var service=this;

  service.getMatchedMenuItems = function(searchTerm){
   return $http({
     method: "GET",
     url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
   }).then(function(result){
     var items = result.data;
     var foundItems = [];

     for(var i=0;i<items.length;i++){
       if(items[i].name.toLowerCase().indexOf('searchTerm.toLowerCase')!== -1){
         foundItems.push(items[i].name);   
       }
       
      }

     return foundItems;
   });
   
  };
}

})();
