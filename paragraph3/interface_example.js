var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        // the code for getting products
        // from a real data source goes here
        return [];
    };
    ProductService.prototype.getProductById = function (id) {
        // the code for getting a product by id goes here
        return { id: 123, description: 'Good product' };
    };
    return ProductService;
}());
var MockProductService = /** @class */ (function () {
    function MockProductService() {
    }
    MockProductService.prototype.getProducts = function () {
        // the code for getting hard-coded
        // products goes here
        return [];
    };
    MockProductService.prototype.getProductById = function (id) {
        return { id: 456, description: 'Not a real product' };
    };
    return MockProductService;
}());
