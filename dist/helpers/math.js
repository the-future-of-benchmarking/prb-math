"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mbn = exports.sqrt = exports.pow = exports.log2 = exports.log10 = exports.ln = exports.gm = exports.floor = exports.exp2 = exports.exp = exports.ceil = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
var mathjs_1 = require("mathjs");
var config = {
    number: "BigNumber",
    precision: 79,
};
var math = mathjs_1.create(mathjs_1.all, config);
var mbn = math.bignumber;
exports.mbn = mbn;
function ceil(x) {
    return mbn(x).ceil().toString();
}
exports.ceil = ceil;
function exp(x) {
    return mbn(x).exp().toString();
}
exports.exp = exp;
function exp2(x) {
    return math.pow(mbn("2"), mbn(x)).toString();
}
exports.exp2 = exp2;
function floor(x) {
    return mbn(x).floor().toString();
}
exports.floor = floor;
function gm(x, y) {
    return math.sqrt(mbn(x).mul(mbn(y))).toString();
}
exports.gm = gm;
function ln(x) {
    return math.log(mbn(x)).toString();
}
exports.ln = ln;
function log10(x) {
    return math.log10(mbn(x)).toString();
}
exports.log10 = log10;
function log2(x) {
    return math.log2(mbn(x)).toString();
}
exports.log2 = log2;
function pow(x, y) {
    return math.pow(mbn(x), mbn(y)).toString();
}
exports.pow = pow;
function sqrt(x) {
    return math.sqrt(mbn(x)).toString();
}
exports.sqrt = sqrt;
//# sourceMappingURL=math.js.map