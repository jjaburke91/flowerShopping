flowerShoppingApp.controller('flower-shopping-controller', ['$scope', 'feed', 'BAWShoppingBasket', function($scope, feed, basket) {
    $scope.flowerCollection = feed[0].skus;
    $scope.flowerCollectionType = feed[0].name;
    $scope.basket = basket;

    console.log($scope.flowerCollection);

}]);
