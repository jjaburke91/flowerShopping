flowerShoppingApp.service('BAWShoppingBasket', [ function() {
    var basket = [];
    var basketHasBeenChanged = true;
    var basketCost = 0;

    var that = this;

    return {
        getBasketContent: function () {
            basketHasBeenChanged = false;
            return basket;
        },
        getBasketCost: function () {
            if (basketHasBeenChanged) {
                basketCost = 0;
                for (var i = 0; i < basket.length; i++) {
                    basketCost += parseInt(basket[i].pricings[0].amount);
                }
            }
            return basketCost;
        },
        addToBasket: function (newItem) {
            basketHasBeenChanged = true;
            basket.push(newItem);
        },
        removeFromBasket: function(itemToRemove) {
            basketHasBeenChanged = true;
            // Consider more efficient way of removing items. Map basket items on entry?
            for (var i=0; i<basket.length; i++) {
                if (basket[i].id == itemToRemove.id) {
                    basket.splice(i,1);
                }
            }
        }
    }
}]);