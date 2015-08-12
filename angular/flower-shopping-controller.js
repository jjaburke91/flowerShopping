flowerShoppingApp.controller('flower-shopping-controller', ['$scope', 'feed', 'BAWShoppingBasket', function($scope, feed, basket) {
    $scope.flowerCollection = feed[0].skus;
    console.log($scope.flowerCollection);
    $scope.basket = basket;

}]);
