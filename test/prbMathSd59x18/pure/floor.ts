import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import fp from "evm-fp";
import forEach from "mocha-each";

import { MAX_SD59x18, MAX_WHOLE_SD59x18, MIN_SD59x18, MIN_WHOLE_SD59x18, PI } from "../../../helpers/constants";
import { floor } from "../../../helpers/math";
import { bn } from "../../../helpers/numbers";

export default function shouldBehaveLikeFloor(): void {
  context("when x is zero", function () {
    it("returns 0", async function () {
      const x: BigNumber = bn("0");
      const expected: BigNumber = bn("0");
      expect(expected).to.equal(await this.contracts.prbMathSd59x18.doFloor(x));
      expect(expected).to.equal(await this.contracts.prbMathSd59x18Typed.doFloor(x));
    });
  });

  context("when x is not zero", function () {
    context("when x is negative", function () {
      context("when x < min whole sd59x18", function () {
        const testSets = [[fp(MIN_SD59x18)], [fp(MIN_WHOLE_SD59x18).sub(1)]];

        forEach(testSets).it("takes %e and reverts", async function (x: BigNumber) {
          await expect(this.contracts.prbMathSd59x18.doFloor(x)).to.be.reverted;
          await expect(this.contracts.prbMathSd59x18Typed.doFloor(x)).to.be.reverted;
        });
      });

      context("when x >= min whole sd59x18", function () {
        const testSets = [[MIN_WHOLE_SD59x18], ["-1e18"], ["-4.2"], ["-2"], ["-1.125"], ["-1"], ["-0.5"], ["-0.1"]];

        forEach(testSets).it("takes %e and returns the correct value", async function (x: string) {
          const expected: BigNumber = fp(floor(x));
          expect(expected).to.equal(await this.contracts.prbMathSd59x18.doFloor(fp(x)));
          expect(expected).to.equal(await this.contracts.prbMathSd59x18Typed.doFloor(fp(x)));
        });
      });
    });

    context("when x is positive", function () {
      const testSets = [
        ["0.1"],
        ["0.5"],
        ["1"],
        ["1.125"],
        ["2"],
        [PI],
        ["4.2"],
        ["1e18"],
        [MAX_WHOLE_SD59x18],
        [MAX_SD59x18],
      ];

      forEach(testSets).it("takes %e and returns the correct value", async function (x: string) {
        const expected: BigNumber = fp(floor(x));
        expect(expected).to.equal(await this.contracts.prbMathSd59x18.doFloor(fp(x)));
        expect(expected).to.equal(await this.contracts.prbMathSd59x18Typed.doFloor(fp(x)));
      });
    });
  });
}
