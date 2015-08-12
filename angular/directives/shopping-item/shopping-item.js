flowerShoppingApp.directive('shoppingItem', function() {
    return {
        restrict: 'E',
        scope: {
            flower: '=flower'
        },
        templateUrl: 'angular/directives/shopping-item/shopping-item.html'
    }
});