flowerShoppingApp.controller('flower-shopping-controller', ['$scope', 'feed', function($scope, feed) {
    $scope.feed = feed;
    console.log(feed);

}]);
