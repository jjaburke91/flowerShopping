flowerShoppingApp.controller('flower-shopping-controller', ['$scope', 'feed', 'BAWShoppingBasket', function($scope, feed, basket) {
    $scope.flowerCollection = feed[0].skus;
    $scope.basket = basket;

}]);
