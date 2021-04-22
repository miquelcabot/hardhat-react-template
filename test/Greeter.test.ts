const hardhat = require('hardhat');
const ethers = hardhat.ethers;
const waffle = hardhat.waffle;

//const Greeter = require('./frontend/src/typechain/Greeter.d');
//import { Greeter } from '../frontend/src/typechain/Greeter';

describe('Greeter contract', () => {
  // Load chai library
  const chai = require('chai');
  chai.use(waffle.solidity);
  let expect = chai.expect;

  let greeter: Greeter;

  const accounts = await ethers.getSigners();
  let owner = accounts[0];
  let addr1 = accounts[1];
  let addr2 = accounts[2];

  const MESSAGE = 'Hello world';

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Greeter = await ethers.getContractFactory('Greeter');
    greeter = (await Greeter.deploy(MESSAGE)) as Greeter;
  });

  it('deploys the smart contract', async () => {
    expect(greeter.address).to.not.be.undefined;
  });

  it('message is correct', async () => {
    const message = await greeter.greet();
    expect(message).to.be.equal(MESSAGE);
  });
});
