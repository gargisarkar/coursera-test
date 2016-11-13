(function() {
    angular.module('ShoppingListCheckOff', []);
    angular.module('ShoppingListCheckOff')
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['$scope', 'ShoppingListService'];
    AlreadyBoughtController.$inject = ['$scope', 'ShoppingListService'];

    function ToBuyController($scope, ShoppingListService) {
        var vm = this;
        vm.items = ShoppingListService.getUnBoughtItems();
        vm.buyItem = function(item) {
            ShoppingListService.addBoughtItem(item);
            ShoppingListService.removeItemFromUnBoughtItems(item);
        }
    }

    function AlreadyBoughtController($scope, ShoppingListService) {
        var vm = this;
        vm.items = ShoppingListService.getBoughtItems();
    }

    function ShoppingListService() {
        var service = this;
        // List of shopping items
        var unBoughtItems = [{
            id: 1,
            name: "cookies",
            quantity: 10
        }, {
            name: "chocolates",
            quantity: 20
        }, {
            name: "candies",
            quantity: 30
        }, {
            name: "cakes",
            quantity: 40
        }, {
            name: "pastries",
            quantity: 50
        }];

        var boughtItems = [];
        service.addBoughtItem = function(item) {
            boughtItems.push(item);
        };

        service.removeItemFromUnBoughtItems = function(item) {
            var index = unBoughtItems.indexOf(item);
            unBoughtItems.splice(index, 1);
        }

        service.getUnBoughtItems = function() {
            return unBoughtItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        }
        return service;
    }

})();
