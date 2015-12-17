import {calcCircumference} from "math/math";

describe("Math", function () {
    it("Should calculate the cirumference correctly based on radius", () => {
        assert.equal(calcCircumference(200), 1256.637061436)
    });
});
