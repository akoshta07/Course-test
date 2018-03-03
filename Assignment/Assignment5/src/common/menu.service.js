(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var dishDetail=null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getShortName=function(short_name){
    var response=$http({
      method: "GET",
      url: (ApiPath+ '/menu_items/' + short_name + '.json' )
    });
    return response;
  };

  service.setShortNameD=function(short_name){
    return $http.get(ApiPath + '/menu_items/' + short_name + '.json').then(function(response){
     console.log(response.data);
     var item =response.data;
     console.log(item);
      dishDetail=item;
    return response.data;
   });
  };



  service.getShortNameD=function(){
    return dishDetail;
  };

}



})();
