(function(){
    'use strict';
    angular.module('LunchMenuApp',[])
    .controller('LunchMenuController',LunchMenuController);
    LunchMenuController.$inject = ['$scope'];
    function LunchMenuController($scope){
        $scope.totalFoodItems = 0;
        $scope.foodItems = "";
        $scope.message = "";
        $scope.CountItems = function(){
            var items = $scope.foodItems;
            if(items === "")
                $scope.message="Please enter data first";
            else {
                var list = items.split(',');
                $scope.message = checkIfTooMuch(list.length);
            }
        };
        
        function checkIfTooMuch(listLen){
            if(listLen <= 3 )
                return "Enjoy!";
            else
                return "Too much!";
        };
    }
    
})();


// function MsgController($scope){
//        $scope.name = "GB";
//        $scope.stateOfBeing = "Hungry";
//        $scope.sayMessage = function(){
//          return "Eat Good";  
//        };
//        
//        $scope.FeedYaakov = function(){
//          $scope.stateOfBeing = "Fed";  
//        };
//    }