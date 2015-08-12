
flowerShoppingApp = angular.module('flower-shopping-app', ['ui.router']);

flowerShoppingApp.config( ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when("/", "/shopping");
    $urlRouterProvider.otherwise("/shopping");

    $stateProvider
        .state('shopping', {
            url: "/shopping",
            templateUrl: '/angular/views/flower-shopping.html',
            controller: "flower-shopping-controller",
            resolve: {
                feed: function(bloomAndWildAPI) {
                    return bloomAndWildAPI.getFeed();
                }
            }
        });

}]);