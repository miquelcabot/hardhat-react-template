// hardhat.config.ts
import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';
dotenvConfig({ path: resolve(__dirname, './.env') });

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "hardhat-deploy-ethers";
import "hardhat-deploy";
import "hardhat-typechain";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/ethers-v5";

const chainIds = {
    ganache: 1337,
    goerli: 5,
    hardhat: 31337,
    kovan: 42,
    mainnet: 1,
    rinkeby: 4,
    ropsten: 3,
    bsctest: 97,
    bscmain: 56,
};

const MNEMONIC: string = process.env.MNEMONIC || '';
const INFURA_KEY: string = process.env.INFURA || '';

const getInfuraURL = (network: keyof typeof chainIds) => {
    return `https://${network}.infura.io/v3/${INFURA_KEY}`;
}

const config: HardhatUserConfig = {
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            accounts: {
                mnemonic: MNEMONIC
            },
            chainId: chainIds.hardhat
        },
        ropsten: {
            url: getInfuraURL('ropsten'),
            accounts: {
                mnemonic: MNEMONIC
            },
            chainId: chainIds.ropsten
        },
        rinkeby: {
            url: getInfuraURL('rinkeby'),
            accounts: {
                mnemonic: MNEMONIC
            },
            chainId: chainIds.rinkeby
        },
        bsctest: {
          url: "https://data-seed-prebsc-1-s1.binance.org:8545",
          chainId: 97,
          gasPrice: 20000000000,
          accounts: {mnemonic: MNEMONIC}
        },
        bscmain: {
          url: "https://bsc-dataseed.binance.org/",
          chainId: 56,
          gasPrice: 20000000000,
          accounts: {mnemonic: MNEMONIC}
        }
    },
    solidity: {
        compilers: [{ version: "0.7.6", settings: { optimizer: { enabled: true, runs: 200 }} }]
    },
    gasReporter: {
        currency: 'USD',
        enabled: process.env.GAS_REPORT ? true:false
    },
    typechain: {
        outDir: "frontend/src/typechain",
    }
};
export default config;
