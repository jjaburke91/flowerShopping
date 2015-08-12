flowerShoppingApp.service('BAWShoppingBasket', [ function() {
    var that = this;

    var flowerToPurchase = null;
    var deliveries = 1;
    var totalCost = 0;

    this.updateCost = function() {
        totalCost = parseInt(flowerToPurchase.pricings[0].amount) * deliveries;
    };

    return {
        selectFlower: function (flowerToSelect) {
            flowerToPurchase = flowerToSelect;
            that.updateCost();
        },
        setNumberOfDeliveries: function(newNumDeliveries) {
            deliveries = newNumDeliveries;
            that.updateCost();
        },
        getNumberOfDeliveries: function() {
            return deliveries;
        },
        getTotalCost: function() {
            return totalCost;
        }
    }
}]);