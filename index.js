//IIFE

(function () {

    angular.module("LunchCheck", [])
        .controller("LunchCheckController",LunchCheckController) ;
        LunchCheckController.$inject=['$scope','$filter'];
        function LunchCheckController($scope,$filter){
            $scope.foods = "";
            $scope.result="";


            var counter = 0;
            $scope.Check = function () {
                var food = $scope.foods;
                if(food.length===0){
                    $scope.result="Please enter data first";
                }
                else{
                for (var i = 0; i < food.length; i++) {
                    if (food[i] === ",") {
                        counter++;
                    }
//,, is also considered a food item
                }
                console.log(counter);
                if (counter < 3) {
                   $scope.result="Enjoy";
                }
                else {
                    $scope.result="It's too much";
                }
                counter = 0;
              
            }


            }
        }      
        })
        
    
()