import { Contract, ContractFactory } from '@ethersproject/contracts';
import { expect } from 'chai'
import { ethers } from 'hardhat'

describe('Token contract', () => {
  let Token: ContractFactory
  let token: Contract

  beforeEach('deploy', async () => {
    Token = await ethers.getContractFactory('Token')
    token = await Token.deploy()
  })

  it('Token contract is deployed', async () => {
    expect(token.address).to.not.be.undefined;
  })

  it('Token contract has the correct symbol', async () => {
    expect(await token.symbol()).to.equal('MHT')
  })

})
