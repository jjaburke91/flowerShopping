flowerShoppingApp.service('bloomAndWildAPI', ['$http', function($http) {
    return {
        getFeed : function() {
            console.info("flickr: Retrieving fresh feed.");

            return $http.get("/data/bloomAndWildAPIContent.json").then(
                function success(response) {
                    return response.data.collections;
                },
                function error(response) {
                    console.error(response);
                    console.error("bloomAndWildAPI: Error retrieving Bloom & Wild API content.");
                }
            );
        }
    };
}]);