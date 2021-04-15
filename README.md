# hardhat-waffle-ethers-ts-template
Hardhat+Waffle+Ethers+Typescript template to compile and test a Solidity Smart Contract

## Prerequisites
* Node >= 10.0 ([https://nodejs.org](https://nodejs.org))
* yarn: `npm install --global yarn`

## Installation
Install:
```
yarn install
```

Update env variables:
```
vi .env.example
mv .env.example .env
```

## Commands
Compile:
```
yarn compile
```

Test:
```
yarn test
```

Test on Rinkeby test network:
```
yarn test:rinkeby
```

Test including gas-report:
```
yarn test:gas
```

Deploy:
```
yarn deploy
```

Deploy to Rinkeby test network:
```
yarn deploy:rinkeby
```

Run prettier on smart contracts:
```
yarn prettier
```
