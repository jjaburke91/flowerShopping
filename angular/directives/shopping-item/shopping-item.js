flowerShoppingApp.directive('shoppingItem', function() {
    return {
        restrict: 'E',
        scope: {
            flower: '=flower'
        },
        templateUrl: 'angular/directives/shopping-item/shopping-item.html',
        controller: 'shoppingItemController'
    }
});

flowerShoppingApp.controller('shoppingItemController', ['$scope', 'BAWShoppingBasket', function($scope, basket) {

    $scope.selectFlower = function(flowerToSelect) {
        basket.selectFlower(flowerToSelect);
    }

}]);