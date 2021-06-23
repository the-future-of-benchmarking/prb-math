"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@nomiclabs/hardhat-waffle");
require("@typechain/hardhat");
require("solidity-coverage");
require("./tasks/clean");
var path_1 = require("path");
var dotenv_1 = require("dotenv");
dotenv_1.config({ path: path_1.resolve(__dirname, "./.env") });
var chainIds = {
    ganache: 1337,
    goerli: 5,
    hardhat: 31337,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
};
// Ensure that we have all the environment variables we need.
var mnemonic;
if (!process.env.MNEMONIC) {
    throw new Error("Please set your MNEMONIC in a .env file");
}
else {
    mnemonic = process.env.MNEMONIC;
}
var infuraApiKey;
if (!process.env.INFURA_API_KEY) {
    throw new Error("Please set your INFURA_API_KEY in a .env file");
}
else {
    infuraApiKey = process.env.INFURA_API_KEY;
}
function createTestnetConfig(network) {
    var url = "https://" + network + ".infura.io/v3/" + infuraApiKey;
    return {
        accounts: {
            count: 10,
            initialIndex: 0,
            mnemonic: mnemonic,
            path: "m/44'/60'/0'/0",
        },
        chainId: chainIds[network],
        url: url,
    };
}
var config = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            accounts: {
                mnemonic: mnemonic,
            },
            chainId: chainIds.hardhat,
        },
        goerli: createTestnetConfig("goerli"),
        kovan: createTestnetConfig("kovan"),
        rinkeby: createTestnetConfig("rinkeby"),
        ropsten: createTestnetConfig("ropsten"),
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
        tests: "./test",
    },
    solidity: {
        version: "0.8.5",
        settings: {
            metadata: {
                bytecodeHash: "none",
            },
            optimizer: {
                enabled: true,
                runs: 800,
            },
        },
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
};
exports.default = config;
//# sourceMappingURL=hardhat.config.js.map