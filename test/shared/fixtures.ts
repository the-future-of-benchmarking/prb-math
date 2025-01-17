import { Signer } from "@ethersproject/abstract-signer";
import hre from "hardhat";
import { Artifact } from "hardhat/types";

import { PRBMathSD59x18Mock } from "../../typechain/PRBMathSD59x18Mock";
import { PRBMathSD59x18TypedMock } from "../../typechain/PRBMathSD59x18TypedMock";
import { PRBMathUD60x18Mock } from "../../typechain/PRBMathUD60x18Mock";
import { PRBMathUD60x18TypedMock } from "../../typechain/PRBMathUD60x18TypedMock";

const { deployContract } = hre.waffle;

type UnitFixturePrbMathSd59x18ReturnType = {
  prbMathSd59x18: PRBMathSD59x18Mock;
  prbMathSd59x18Typed: PRBMathSD59x18TypedMock;
};

export async function unitFixturePrbMathSd59x18(signers: Signer[]): Promise<UnitFixturePrbMathSd59x18ReturnType> {
  const deployer: Signer = signers[0];

  const prbMathSd59x18Artifact: Artifact = await hre.artifacts.readArtifact("PRBMathSD59x18Mock");
  const prbMathSd59x18: PRBMathSD59x18Mock = <PRBMathSD59x18Mock>(
    await deployContract(deployer, prbMathSd59x18Artifact, [])
  );

  const prbMathSd59x18TypedArtifact: Artifact = await hre.artifacts.readArtifact("PRBMathSD59x18TypedMock");
  const prbMathSd59x18Typed: PRBMathSD59x18TypedMock = <PRBMathSD59x18TypedMock>(
    await deployContract(deployer, prbMathSd59x18TypedArtifact, [])
  );

  return { prbMathSd59x18, prbMathSd59x18Typed };
}

type UnitFixturePrbMathUd60x18ReturnType = {
  prbMathUd60x18: PRBMathUD60x18Mock;
  prbMathUd60x18Typed: PRBMathUD60x18TypedMock;
};

export async function unitFixturePrbMathUd60x18(signers: Signer[]): Promise<UnitFixturePrbMathUd60x18ReturnType> {
  const deployer: Signer = signers[0];

  const prbMathUd60x18Artifact: Artifact = await hre.artifacts.readArtifact("PRBMathUD60x18Mock");
  const prbMathUd60x18: PRBMathUD60x18Mock = <PRBMathUD60x18Mock>(
    await deployContract(deployer, prbMathUd60x18Artifact, [])
  );

  const prbMathUd60x18TypedArtifact: Artifact = await hre.artifacts.readArtifact("PRBMathUD60x18TypedMock");
  const prbMathUd60x18Typed: PRBMathUD60x18TypedMock = <PRBMathUD60x18TypedMock>(
    await deployContract(deployer, prbMathUd60x18TypedArtifact, [])
  );

  return { prbMathUd60x18, prbMathUd60x18Typed };
}
