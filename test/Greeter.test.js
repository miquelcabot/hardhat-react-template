const { expect } = require("chai");

describe('Greeter contract', async () => {

  let greeter;

  [owner, addr1, addr2] = await ethers.getSigners();

  const MESSAGE = 'Hello world';

  beforeEach('deploy', async () => {
    const Greeter = await ethers.getContractFactory('Greeter');
    greeter = await Greeter.deploy(MESSAGE);
  });

  it('deploys the smart contract', async () => {
    expect(greeter.address).to.not.be.undefined;
  });

  it('message is correct', async () => {
    const message = await greeter.greet();
    expect(message).to.be.equal(MESSAGE);
  });
});
