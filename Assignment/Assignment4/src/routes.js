(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  .state('categories',{
    url: '/categories',
    templateUrl: 'src/menuapp/templates/menudata.template.html',
    controller:'MenuDataController as menuController',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService){
      return MenuDataService.getAllCategories();
    }]}
  })
  .state('items',{
    url:'/items/{short_name}',
    templateUrl:'src/menuapp/templates/itemdata.template.html',
    controller: 'ItemDataController as itemController',
    resolve:{
      items:['$stateParams','MenuDataService',
      function($stateParams,MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  });

}

})();
