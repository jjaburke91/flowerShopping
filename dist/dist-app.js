
flowerShoppingApp = angular.module('flowerShoppingApp', ['ui.router', 'ui.slider']);

flowerShoppingApp.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/", "/shopping");
    $urlRouterProvider.otherwise("/shopping");

    $stateProvider
        .state('shopping', {
            url: "/shopping",
            templateUrl: '/angular/views/flower-shopping.html',
            controller: "flowerShoppingController",
            resolve: {
                feed: function(bloomAndWildAPI) {
                    return bloomAndWildAPI.getFeed();
                }
            }
        });

}]);;flowerShoppingApp.controller('flowerShoppingController', ['$scope', 'feed', 'BAWShoppingBasket', function($scope, feed, basket) {
    $scope.flowerCollection = feed[0].skus;
    $scope.flowerCollectionType = feed[0].name;
    $scope.basket = basket;

    $scope.deliveries = basket.getNumberOfDeliveries();
    $scope.$watch('deliveries', function() {
        basket.setNumberOfDeliveries($scope.deliveries);
    });

    basket.selectFlower($scope.flowerCollection[0]); // Selection defaults to first item
}]);
;flowerShoppingApp.directive('shoppingItem', function() {
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
    $scope.basket = basket;
}]);;flowerShoppingApp.service('bloomAndWildAPI', ['$http', function($http) {
    return {
        getFeed : function() {
            return $http.get("/data/bloomAndWildAPIContent.json").then(
                function success(response) {
                    return response.data.collections;
                },
                function error() {
                    console.error("bloomAndWildAPI: Error retrieving Bloom & Wild API content.");
                }
            );
        }
    };
}]);;flowerShoppingApp.service('BAWShoppingBasket', [ function() {
    var flowerToPurchase = null;
    var deliveries = 1;
    var totalCost = 0;

    // Alternative to this method could be to use a $watch with rootScope or an injected scope, however this method seems best is it's the least coupled.
    var updateCost = function() {
        totalCost = parseInt(flowerToPurchase.pricings[0].amount) * deliveries;
    };

    return {
        selectFlower: function (flowerToSelect) {
            // Deliberately not refreshing delivery count on new flower.
            flowerToPurchase = flowerToSelect;
            updateCost();
        },
        getSelectedFlowerID: function() {
            return flowerToPurchase.id;
        },
        setNumberOfDeliveries: function(newNumDeliveries) {
            deliveries = newNumDeliveries;
            updateCost();
        },
        getNumberOfDeliveries: function() {
            return deliveries;
        },
        getTotalCost: function() {
            return totalCost;
        }
    }
}]);