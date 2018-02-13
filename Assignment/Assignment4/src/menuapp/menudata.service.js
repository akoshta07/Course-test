(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);
MenuDataService.$inject=['$http'];
function MenuDataService($http){

    var service = this;
    var categories = [];
    var items = []
    var getCategories=function(){
        var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
    });
        return response;
    };

    var getCategoriesName = function (shortName) {
        var response = $http({
            method: "GET",
            url: "https://davids-restaurant.herokuapp.com/menu_items.json" ,
            params:{
             category : shortName
            }
        });

    return response;
    };

    service.getAllCategories = function(){
        var promise = getCategories();
           categories=[];
        promise.then(function(response){
            var data=response.data;
            for(var i=0 ; i<data.length ; i++){
                categories.push(data[i]);
            }  
        })
        .catch(function(error){
            console.log(error);
        });
        
        return categories;
    }

    service.getItemsForCategory=function(categoryShortName){
        var promise = getCategoriesName(categoryShortName);
        items=[];
        promise.then(function(response){
            var addItems = response.data;
            var item = addItems.category;

            for(var i=0; i<item.length ; i++){
                items.push(item[i]);
            }
            console.log(items);
        })
        .catch(function(error){
            console.log(error);
        });
        
        return items;
    };
}


})();