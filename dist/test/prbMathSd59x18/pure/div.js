"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var evm_fp_1 = __importDefault(require("evm-fp"));
var mocha_each_1 = __importDefault(require("mocha-each"));
var constants_1 = require("../../../helpers/constants");
var math_1 = require("../../../helpers/math");
var numbers_1 = require("../../../helpers/numbers");
function shouldBehaveLikeDiv() {
    context("when the denominator is zero", function () {
        it("reverts", function () {
            return __awaiter(this, void 0, void 0, function () {
                var x, y;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            x = evm_fp_1.default("1");
                            y = numbers_1.bn("0");
                            return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18.doDiv(x, y)).to.be.reverted];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18Typed.doDiv(x, y)).to.be.reverted];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    context("when the denominator is not zero", function () {
        context("when the denominator is min sd59x18", function () {
            it("reverts", function () {
                return __awaiter(this, void 0, void 0, function () {
                    var x, y;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                x = evm_fp_1.default("1");
                                y = evm_fp_1.default(constants_1.MIN_SD59x18);
                                return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18.doDiv(x, y)).to.be.reverted];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18Typed.doDiv(x, y)).to.be.reverted];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            });
        });
        context("when the denominator is not min sd59x18", function () {
            context("when the numerator is zero", function () {
                var testSets = ["-1e18", "-" + constants_1.PI, "-1", "-1e-18"].concat(["1e-18", "1", constants_1.PI, "1e18"]);
                mocha_each_1.default(testSets).it("takes %e and returns 0", function (y) {
                    return __awaiter(this, void 0, void 0, function () {
                        var x, expected, _a, _b, _c, _d;
                        return __generator(this, function (_e) {
                            switch (_e.label) {
                                case 0:
                                    x = numbers_1.bn("0");
                                    expected = numbers_1.bn("0");
                                    _b = (_a = chai_1.expect(expected).to).equal;
                                    return [4 /*yield*/, this.contracts.prbMathSd59x18.doDiv(x, evm_fp_1.default(y))];
                                case 1:
                                    _b.apply(_a, [_e.sent()]);
                                    _d = (_c = chai_1.expect(expected).to).equal;
                                    return [4 /*yield*/, this.contracts.prbMathSd59x18Typed.doDiv(x, evm_fp_1.default(y))];
                                case 2:
                                    _d.apply(_c, [_e.sent()]);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
            });
            context("when the numerator is not zero", function () {
                context("when the numerator is min sd59x18", function () {
                    it("reverts", function () {
                        return __awaiter(this, void 0, void 0, function () {
                            var x, y;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        x = evm_fp_1.default(constants_1.MIN_SD59x18);
                                        y = evm_fp_1.default("1");
                                        return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18.doDiv(x, y)).to.be.reverted];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18Typed.doDiv(x, y)).to.be.reverted];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                });
                context("when the numerator is not min sd59x18", function () {
                    context("when the result overflows sd59x18", function () {
                        var testSets = [
                            [evm_fp_1.default(constants_1.MIN_SD59x18).div(evm_fp_1.default(constants_1.SCALE)).sub(1), evm_fp_1.default("1e-18")],
                            [evm_fp_1.default(constants_1.MIN_SD59x18).div(evm_fp_1.default(constants_1.SCALE)).sub(1), evm_fp_1.default("1e-18")],
                        ].concat([
                            [evm_fp_1.default(constants_1.MAX_SD59x18).div(evm_fp_1.default(constants_1.SCALE)).add(1), evm_fp_1.default("1e-18")],
                            [evm_fp_1.default(constants_1.MAX_SD59x18).div(evm_fp_1.default(constants_1.SCALE)).add(1), evm_fp_1.default("1e-18")],
                        ]);
                        mocha_each_1.default(testSets).it("takes %e and %e and reverts", function (x, y) {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18.doDiv(x, y)).to.be.reverted];
                                        case 1:
                                            _a.sent();
                                            return [4 /*yield*/, chai_1.expect(this.contracts.prbMathSd59x18Typed.doDiv(x, y)).to.be.reverted];
                                        case 2:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        });
                    });
                    context("when the result does not overflow sd59x18", function () {
                        context("when the numerator and the denominator have the same sign", function () {
                            var testSets = [
                                ["-57896044618658097711785492504343953926634.992332820282019728", "-1e-18"],
                                ["-1e18", "-1"],
                                ["-2503", "-918882.11"],
                                ["-772.05", "-199.98"],
                                ["-100.135", "-100.134"],
                                ["-22", "-7"],
                                ["-4", "-2"],
                                ["-2", "-5"],
                                ["-2", "-2"],
                                ["-0.1", "-0.01"],
                                ["-0.05", "-0.02"],
                                ["-1e-5", "-0.00002"],
                                ["-1e-5", "-1e-5"],
                                ["-1e-18", "-1"],
                                ["-1e-18", "-1.000000000000000001"],
                                ["-1e-18", math_1.mbn(constants_1.MIN_SD59x18).add(math_1.mbn("1e-18")).toString()],
                            ].concat([
                                ["1e-18", constants_1.MAX_SD59x18],
                                ["1e-18", "1.000000000000000001"],
                                ["1e-18", "1"],
                                ["1e-5", "1e-5"],
                                ["1e-5", "0.00002"],
                                ["0.05", "0.02"],
                                ["0.1", "0.01"],
                                ["2", "2"],
                                ["2", "5"],
                                ["4", "2"],
                                ["22", "7"],
                                ["100.135", "100.134"],
                                ["772.05", "199.98"],
                                ["2503", "918882.11"],
                                ["1e18", "1"],
                                ["57896044618658097711785492504343953926634.992332820282019728", "1e-18"],
                            ]);
                            mocha_each_1.default(testSets).it("takes %e and %e and returns the correct value", function (x, y) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var expected, _a, _b, _c, _d;
                                    return __generator(this, function (_e) {
                                        switch (_e.label) {
                                            case 0:
                                                expected = evm_fp_1.default(String(math_1.mbn(x).div(math_1.mbn(y))));
                                                _b = (_a = chai_1.expect(expected).to).equal;
                                                return [4 /*yield*/, this.contracts.prbMathSd59x18.doDiv(evm_fp_1.default(x), evm_fp_1.default(y))];
                                            case 1:
                                                _b.apply(_a, [_e.sent()]);
                                                _d = (_c = chai_1.expect(expected).to).equal;
                                                return [4 /*yield*/, this.contracts.prbMathSd59x18Typed.doDiv(evm_fp_1.default(x), evm_fp_1.default(y))];
                                            case 2:
                                                _d.apply(_c, [_e.sent()]);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                        });
                        context("when the numerator and the denominator do not have the same sign", function () {
                            var testSets = [
                                ["-57896044618658097711785492504343953926634.992332820282019728", "1e-18"],
                                ["-1e18", "1"],
                                ["-2503", "918882.11"],
                                ["-772.05", "199.98"],
                                ["-100.135", "100.134"],
                                ["-22", "7"],
                                ["-4", "2"],
                                ["-2", "5"],
                                ["-2", "2"],
                                ["-0.1", "0.01"],
                                ["-0.05", "0.02"],
                                ["-1e-5", "2e-5"],
                                ["-1e-5", "1e-5"],
                                ["-1e-18", "1"],
                                ["-1e-18", "1.000000000000000001"],
                                ["-1e-18", constants_1.MAX_SD59x18],
                            ].concat([
                                ["1e-18", math_1.mbn(constants_1.MIN_SD59x18).add(math_1.mbn("1e-18")).toString()],
                                ["1e-18", "-1.000000000000000001"],
                                ["1e-18", "-1"],
                                ["1e-5", "-1e-5"],
                                ["1e-5", "-2e-5"],
                                ["0.05", "-0.02"],
                                ["0.1", "-0.01"],
                                ["2", "-2"],
                                ["2", "-5"],
                                ["4", "-2"],
                                ["22", "-7"],
                                ["100.135", "-100.134"],
                                ["772.05", "-199.98"],
                                ["2503", "-918882.11"],
                                ["1e18", "-1"],
                                ["57896044618658097711785492504343953926634.992332820282019728", "-1e-18"],
                            ]);
                            mocha_each_1.default(testSets).it("takes %e and %e and returns the correct value", function (x, y) {
                                return __awaiter(this, void 0, void 0, function () {
                                    var expected, _a, _b, _c, _d;
                                    return __generator(this, function (_e) {
                                        switch (_e.label) {
                                            case 0:
                                                expected = evm_fp_1.default(String(math_1.mbn(x).div(math_1.mbn(y))));
                                                _b = (_a = chai_1.expect(expected).to).equal;
                                                return [4 /*yield*/, this.contracts.prbMathSd59x18.doDiv(evm_fp_1.default(x), evm_fp_1.default(y))];
                                            case 1:
                                                _b.apply(_a, [_e.sent()]);
                                                _d = (_c = chai_1.expect(expected).to).equal;
                                                return [4 /*yield*/, this.contracts.prbMathSd59x18Typed.doDiv(evm_fp_1.default(x), evm_fp_1.default(y))];
                                            case 2:
                                                _d.apply(_c, [_e.sent()]);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
exports.default = shouldBehaveLikeDiv;
//# sourceMappingURL=div.js.map