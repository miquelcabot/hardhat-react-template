import { ethers, waffle } from 'hardhat'
import chai from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { Greeter } from '../frontend/src/typechain/Greeter'

chai.use(waffle.solidity)
const { expect } = chai

describe('Greeter contract', () => {
  let greeter: Greeter
  let owner: SignerWithAddress
  let addr1: SignerWithAddress
  let addr2: SignerWithAddress

  const MESSAGE: string = 'Hello world'

  beforeEach('deploy', async () => {
    [owner, addr1, addr2] = await ethers.getSigners()

    const Greeter = await ethers.getContractFactory('Greeter')
    greeter = (await Greeter.deploy(MESSAGE)) as Greeter
  })

  it('deploys the smart contract', async () => {
    expect(greeter.address).to.not.be.undefined
  })

  it('message is correct', async () => {
    let message = await greeter.greet()
    expect(message).to.be.equal(MESSAGE)
  })

})
