import { ethers } from 'hardhat'

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log(
    'Deploying contracts with the account:',
    deployer.address
  );
  
  console.log('Account balance:', (await deployer.getBalance()).toString());

  const EDeliveryFactory = await ethers.getContractFactory('EDeliveryFactory');
  const eDeliveryFactory = await EDeliveryFactory.deploy();

  console.log('EDeliveryFactory address:', eDeliveryFactory.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });