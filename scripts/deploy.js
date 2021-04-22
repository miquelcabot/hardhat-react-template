const hardhat = require("hardhat");

async function main() {
  const [deployer] = await hardhat.ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const Greeter = await hardhat.ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy('Hello world');

  console.log('Greeter address:', greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
