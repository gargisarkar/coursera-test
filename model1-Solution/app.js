(function(){
  'use strict';
  angular
    .module('LunchCheck',[]);
    angular
    .module('LunchCheck')
    .controller("LunchCheckController", LunchCheckController)

   LunchCheckController.$inject=['$scope'];

    function LunchCheckController($scope) {
      var splitString = function(stringToSplit, separator) {
        return stringToSplit.split(separator);
      };

    $scope.check = function(){
      if($scope.items){
          var arrayafterSplit = splitString($scope.items, ",");
          if(arrayafterSplit.length > 3){
            $scope.errorMessage = "Too much!";
          }else if(arrayafterSplit.length > 0 && arrayafterSplit.length <= 3){
            $scope.errorMessage = "Enjoy!!";
          }
      } else if(!$scope.items){
            $scope.errorMessage = "Please enter items first";
      }
    }
  }
})();
