import { BigNumber } from "@ethersproject/bignumber";
import { expect } from "chai";
import fp from "evm-fp";
import forEach from "mocha-each";

import { E, MAX_UD60x18, MAX_WHOLE_UD60x18, PI } from "../../../helpers/constants";
import { log2 } from "../../../helpers/math";
import { bn } from "../../../helpers/numbers";

export default function shouldBehaveLikeLog2(): void {
  context("when x is less than 1", function () {
    const testSets = [bn("0"), fp("0.0625"), fp("0.1"), fp("0.5"), fp("0.8"), fp("1").sub(1)];

    forEach(testSets).it("takes %e and reverts", async function () {
      const x: BigNumber = bn("0");
      await expect(this.contracts.prbMathUd60x18.doLog2(x)).to.be.reverted;
      await expect(this.contracts.prbMathUd60x18Typed.doLog2(x)).to.be.reverted;
    });
  });

  context("when x is greater than or equal to 1", function () {
    context("when x is a power of two", function () {
      const testSets = [["1"], ["2"], ["4"], ["8"], ["16"], ["195"]];

      forEach(testSets).it("takes %e and returns the correct value", async function (x: string) {
        const expected: BigNumber = fp(log2(x));
        expect(expected).to.be.near(await this.contracts.prbMathUd60x18.doLog2(fp(x)));
        expect(expected).to.be.near(await this.contracts.prbMathUd60x18Typed.doLog2(fp(x)));
      });
    });

    context("when x is not a power of two", function () {
      const testSets = [["1.125"], [E], [PI], ["1e18"], [MAX_WHOLE_UD60x18], [MAX_UD60x18]];

      forEach(testSets).it("takes %e and returns the correct value", async function (x: string) {
        const expected: BigNumber = fp(log2(x));
        expect(expected).to.be.near(await this.contracts.prbMathUd60x18.doLog2(fp(x)));
        expect(expected).to.be.near(await this.contracts.prbMathUd60x18Typed.doLog2(fp(x)));
      });
    });
  });
}
