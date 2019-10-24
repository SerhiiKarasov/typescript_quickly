var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.sellStock = function (symbol, numberOfShares) {
        console.log("Selling " + numberOfShares + " of " + symbol);
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.sellStock = function (symbol, numberOfShares) {
        _super.prototype.sellStock.call(this, symbol, numberOfShares);
        this.reportToCompliance(symbol, numberOfShares);
    };
    Employee.prototype.reportToCompliance = function (symbol, shares) {
        console.log(this.lastName + " from " + this.department + " sold " + shares + " shares of " + symbol);
    };
    return Employee;
}(Person));
var emp = new Employee('Joe', 'Smith', 29, 'Accounting');
emp.sellStock('Google', 100);
