(function(){

'use strict';

angular.module('public')
.controller('MyInfoController',MyInfoController);

MyInfoController.$inject=['SignUpService','MenuService'];
function MyInfoController(SignUpService,MenuService){

 var ctrl = this;
 ctrl.user=SignUpService.getUser();
 ctrl.dish= MenuService.getShortNameD();
}

})();