flowerShoppingApp.service('BAWShoppingBasket', [ function() {
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