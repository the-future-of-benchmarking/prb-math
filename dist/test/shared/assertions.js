"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.near = void 0;
var constants_1 = require("../../helpers/constants");
var ethers_math_1 = require("../../helpers/ethers.math");
function near(chai) {
    var Assertion = chai.Assertion;
    Assertion.addMethod("near", function (actual) {
        var expected = this._obj;
        var delta = expected.sub(actual).abs();
        this.assert(delta.lte(ethers_math_1.max(constants_1.EPSILON, expected.div(constants_1.EPSILON_MAGNITUDE))), "expected #{exp} to be near #{act}", "expected #{exp} to not be near #{act}", expected, actual);
    });
}
exports.near = near;
//# sourceMappingURL=assertions.js.map