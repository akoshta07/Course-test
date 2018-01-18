(function () {
'use strict';

angular.module('AsApp1', [])
.controller('MyCtrl',MyCtrl);

MyCtrl.$inject=['$scope'];
function MyCtrl($scope){
  $scope.name="";
  $scope.Mess="";
  $scope.CheckLunch= function(){
    var item=$scope.name.split(',')
   if($scope.name != ""){
    if ((item.length >= 1) && (item.length < 4)){
      $scope.Mess="Enjoy!";
    }
    else if (item.length >3){
      $scope.Mess="Too Much!";
    }
  }
  };

}

})();

