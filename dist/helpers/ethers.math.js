"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solidityModByScale = exports.solidityMod = exports.mul = exports.max = exports.inv = exports.frac = exports.avg = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var evm_fp_1 = __importDefault(require("evm-fp"));
var constants_1 = require("./constants");
function avg(x, y) {
    var result = x.div(2).add(y.div(2));
    if (x.mod(2).eq(1) && y.mod(2).eq(1)) {
        result = result.add(1);
    }
    return result;
}
exports.avg = avg;
function frac(x) {
    return solidityModByScale(x);
}
exports.frac = frac;
function inv(x) {
    return evm_fp_1.default(constants_1.SCALE).mul(evm_fp_1.default(constants_1.SCALE)).div(x);
}
exports.inv = inv;
function max(x, y) {
    if (x.gte(y)) {
        return x;
    }
    else {
        return y;
    }
}
exports.max = max;
function mul(x, y) {
    var doubleScaledProduct = x.mul(y);
    var doubleScaledProductWithHalfScale;
    if (doubleScaledProduct.isNegative()) {
        doubleScaledProductWithHalfScale = doubleScaledProduct.sub(evm_fp_1.default(constants_1.HALF_SCALE));
    }
    else {
        doubleScaledProductWithHalfScale = doubleScaledProduct.add(evm_fp_1.default(constants_1.HALF_SCALE));
    }
    var result = doubleScaledProductWithHalfScale.div(evm_fp_1.default(constants_1.SCALE));
    return result;
}
exports.mul = mul;
function solidityMod(x, n) {
    var result = x.mod(n);
    if (!result.isZero() && x.isNegative()) {
        result = result.sub(n);
    }
    return result;
}
exports.solidityMod = solidityMod;
// See https://github.com/ethers-io/ethers.js/discussions/1408.
function solidityModByScale(x) {
    var scale = bignumber_1.BigNumber.from(10).pow(18);
    return solidityMod(x, scale);
}
exports.solidityModByScale = solidityModByScale;
//# sourceMappingURL=ethers.math.js.map