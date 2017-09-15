'use strict';
//https://github.com/bbraithwaite/karma-seed
describe("Calculator", function() {
    it("adds two numbers together", function() {
        var x = 1
        var y = 2
        var r = window.calculator.add(x, y)
        expect(r).toBe(3);
    });
});