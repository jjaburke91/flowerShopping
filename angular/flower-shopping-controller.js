flowerShoppingApp.controller('flowerShoppingController', ['$scope', 'feed', 'BAWShoppingBasket', function($scope, feed, basket) {
    $scope.flowerCollection = feed[0].skus;
    $scope.flowerCollectionType = feed[0].name;
    $scope.basket = basket;

    $scope.deliveries = basket.getNumberOfDeliveries();
    $scope.$watch('deliveries', function() {
        basket.setNumberOfDeliveries($scope.deliveries);
    });

    basket.selectFlower($scope.flowerCollection[0]); // Selection defaults to first item
}]);
