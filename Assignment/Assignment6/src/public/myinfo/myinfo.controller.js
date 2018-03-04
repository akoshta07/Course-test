(function(){

'use strict';

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject=['SignUpService','MenuService','ApiPath'];
function MyInfoController(SignUpService,MenuService,ApiPath){

 var ctrl = this;
 ctrl.user=SignUpService.getUser();
 ctrl.dish= MenuService.getShortNameD();
 ctrl.basePath=ApiPath;
}

})();
