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
function shouldBehaveLikeExp() {
    context("when x is zero", function () {
        it("returns 1", function () {
            return __awaiter(this, void 0, void 0, function () {
                var x, expected, _a, _b, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            x = numbers_1.bn("0");
                            expected = evm_fp_1.default("1");
                            _b = (_a = chai_1.expect(expected).to).equal;
                            return [4 /*yield*/, this.contracts.prbMathUd60x18.doExp(x)];
                        case 1:
                            _b.apply(_a, [_e.sent()]);
                            _d = (_c = chai_1.expect(expected).to).equal;
                            return [4 /*yield*/, this.contracts.prbMathUd60x18Typed.doExp(x)];
                        case 2:
                            _d.apply(_c, [_e.sent()]);
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
    context("when x is positive", function () {
        context("when x is greater than or equal to 133.084258667509499440", function () {
            var testSets = [evm_fp_1.default("133.084258667509499441"), evm_fp_1.default(constants_1.MAX_WHOLE_UD60x18), evm_fp_1.default(constants_1.MAX_UD60x18)];
            mocha_each_1.default(testSets).it("takes %e and reverts", function (x) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, chai_1.expect(this.contracts.prbMathUd60x18.doExp(x)).to.be.reverted];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, chai_1.expect(this.contracts.prbMathUd60x18Typed.doExp(x)).to.be.reverted];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            });
        });
        context("when x is less than or equal to 133.084258667509499440", function () {
            var testSets = [
                ["1e-18"],
                ["1e-15"],
                ["1"],
                ["2"],
                [constants_1.E],
                ["3"],
                [constants_1.PI],
                ["4"],
                ["11.89215"],
                ["16"],
                ["20.82"],
                ["33.333333"],
                ["64"],
                ["71.002"],
                ["88.722839111672999627"],
                ["133.084258667509499440"],
            ];
            mocha_each_1.default(testSets).it("takes %e and returns the correct value", function (x) {
                return __awaiter(this, void 0, void 0, function () {
                    var expected, _a, _b, _c, _d;
                    return __generator(this, function (_e) {
                        switch (_e.label) {
                            case 0:
                                expected = evm_fp_1.default(math_1.exp(x));
                                _b = (_a = chai_1.expect(expected).to.be).near;
                                return [4 /*yield*/, this.contracts.prbMathUd60x18.doExp(evm_fp_1.default(x))];
                            case 1:
                                _b.apply(_a, [_e.sent()]);
                                _d = (_c = chai_1.expect(expected).to.be).near;
                                return [4 /*yield*/, this.contracts.prbMathUd60x18Typed.doExp(evm_fp_1.default(x))];
                            case 2:
                                _d.apply(_c, [_e.sent()]);
                                return [2 /*return*/];
                        }
                    });
                });
            });
        });
    });
}
exports.default = shouldBehaveLikeExp;
//# sourceMappingURL=exp.js.map