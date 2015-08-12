flowerShoppingApp.service('bloomAndWildAPI', ['$http', function($http) {
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
}]);