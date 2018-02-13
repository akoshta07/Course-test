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

        promise.then(function(response){
            console.log(response.data);
            categories=response.data;
            
        })
        .catch(function(error){
            console.log(error);
        });
        return categories;
    }

    service.getItemsForCategory=function(categoryShortName){
        var promise = getCategoriesName(categoryShortName);

        promise.then(function(response){
            var addItems = response.data;
            items = addItems.category;
        })
        .catch(function(error){
            console.log(error);
        })
    };
}


})();