(function () {
'use strict';

angular.module('AsApp1', [])
.controller('MyCtrl',['$scope',MyCtrl]);

function MyCtrl($scope){
  $scope.name="";
  $scope.Mess="";
  $scope.CheckLunch= function(){
    var item=$scope.name.split(',')

    if ((item.length > 0) && (item.length < 4)){
      $scope.Mess="Enjoy!";
    }
    else if (item.length >3){
      $scope.Mess="Too Much!";
    }
  };
}

})();

