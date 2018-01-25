(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
   var buylist=this;

  buylist.items = ShoppingListCheckOffService.getBuyList();

  buylist.removeItem =function(itemIndex){
   ShoppingListCheckOffService.removeItem(itemIndex);
  };

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var broughtlist = this;

  broughtlist.items = ShoppingListCheckOffService.getBroughtList();  
}

function ShoppingListCheckOffService(){
  var buy=[{ name: "cookies", quantity: 10 },
           { name: "pepsi", quantity: 3 },
           { name: "coak", quantity: 15 },
           { name: "tea", quantity: 1 },
           { name: "lemon", quantity: 20 },
           { name: "fruits", quantity: 4 }];

  var brought=[];
  var service=this;

  this.removeItem = function(itemIndex){
    brought.push(buy[itemIndex]);
    buy.splice(itemIndex,1);
  }

  this.getBuyList = function(){
    return buy;
  }

  this.getBroughtList = function(){
    return brought;
  }
  
}


})();

