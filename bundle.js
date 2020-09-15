/// <reference path="CalculatorInterface.ts" />
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
/// <reference path="Calculator.ts" />
var calc = new Calculator();
var result = calc.add(2, 3);
console.log("The result is " + result);
