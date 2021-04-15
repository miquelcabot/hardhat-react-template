import { ethers, waffle } from 'hardhat'
import chai from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { EDeliveryFactory } from '../typechain/EDeliveryFactory'
import { EDelivery } from '../typechain/EDelivery'

chai.use(waffle.solidity)
const { expect } = chai

describe('EDelivery contract', () => {
  let eDeliveryFactory: EDeliveryFactory
  let eDelivery: EDelivery
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress

  const MESSAGE: string = 'Hola, com va tot?'

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners()

    const EDeliveryFactory = await ethers.getContractFactory('EDeliveryFactory')
    eDeliveryFactory = (await EDeliveryFactory.deploy()) as EDeliveryFactory

    await eDeliveryFactory.createDelivery([addr1.address, addr2.address], MESSAGE)
    const [eDeliveryAddress] = await eDeliveryFactory.getDeliveries()

    const EDelivery = await ethers.getContractFactory('EDelivery')
    eDelivery = (await EDelivery.attach(eDeliveryAddress)) as EDelivery
  })

  it('deploys a factory and a delivery', async () => {
    expect(eDeliveryFactory.address).to.not.be.undefined
    expect(eDelivery.address).to.not.be.undefined
  })

  it('message is correct', async () => {
    let message = await eDelivery.message()
    expect(message).to.be.equal(MESSAGE)
  })

})
