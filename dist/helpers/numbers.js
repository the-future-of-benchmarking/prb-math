"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bn = void 0;
var bignumber_1 = require("@ethersproject/bignumber");
var from_exponential_1 = __importDefault(require("from-exponential"));
function bn(x) {
    var xs = x;
    if (x.includes("e")) {
        xs = from_exponential_1.default(x);
    }
    return bignumber_1.BigNumber.from(xs);
}
exports.bn = bn;
//# sourceMappingURL=numbers.js.map