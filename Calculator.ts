/// <reference path="CalculatorInterface.ts" />
 
class Calculator implements CalculatorInterface {
    public add(a: number, b: number): number {
        return a + b;
    }
}