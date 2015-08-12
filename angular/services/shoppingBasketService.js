flowerShoppingApp.service('BAWShoppingBasket', [ function() {
    var flowerToPurchase = null;
    var deliveries = 1;
    var totalCost = 0;

    var updateCost = function() {
        totalCost = parseInt(flowerToPurchase.pricings[0].amount) * deliveries;
    };

    return {
        selectFlower: function (flowerToSelect) {
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