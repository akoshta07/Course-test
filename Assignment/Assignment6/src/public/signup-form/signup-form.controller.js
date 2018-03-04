(function(){
"use strict";

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['MenuService','SignUpService'];
    function SignUpController(MenuService, SignUpService){
  var ctrl=this;
  ctrl.show = false;
  ctrl.complete=false;
  ctrl.user={
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      short_name:''
  };

  ctrl.submit =function(){
     var promise= MenuService.getShortName(ctrl.user.short_name);
      promise.then(function(response){
          console.log(response.data);
          ctrl.show = false;       
          ctrl.complete=true;
          SignUpService.saveUser(ctrl.user);
          MenuService.setShortNameD(ctrl.user.short_name);
      })
      .catch(function(error){
          console.log(error);
          ctrl.show=true;
          ctrl.complete=false;
      });
  };
}

})();