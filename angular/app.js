
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

}]);