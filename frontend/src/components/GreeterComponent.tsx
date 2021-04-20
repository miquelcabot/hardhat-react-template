import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Greeter } from './../typechain/Greeter';
import { Greeter__factory } from "./../typechain/factories/Greeter__factory";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
    56, // Binance Smart Chain (BNB)
    97, // Binance Smart Chain (BNB) - Testnet
  ],
})

export const GreeterComponent = () => {
  const { chainId, account, activate, active, library } = useWeb3React()
  
  const [message, setMessage] = useState('')

  const onClick = async () => {
    await activate(injectedConnector)
  }

  useEffect(() => {
    const connect = async () => {
      await activate(injectedConnector)
    }
    const showGreeter = async () => {
      let greeter: Greeter = Greeter__factory.connect("0x18AfA7D71a3af8c791F65cAeE7E513092C0628b6", library)

      console.log(await greeter.greet())
      setMessage(await greeter.greet())
    } 
    if (!active) {
      connect()
    } else {
      showGreeter()
    }
  })

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ Active connection</div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect to MetaMask
        </button>
      )}
      <div>
        Message in the Greeter smart contract: <strong>{message}</strong>
      </div>
    </div>
  )
}

export default GreeterComponent
