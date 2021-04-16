import React, { Component } from 'react';
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
})

export const Wallet = () => {
  const { chainId, account, activate, active } = useWeb3React()

  const onClick = () => {
    activate(injectedConnector)
  }

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect
        </button>
      )}
    </div>
  )
}

export const EDelivery = () => {
  const { chainId, account } = useWeb3React()

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
    </div>
  )
}

class Home extends Component {
  state = {
    loadingPage: true,
    loading: false,
    errorMessage: ''
  };

  componentDidMount = async () => {
    //await window.ethereum.enable();
    //const provider = new ethers.providers.Web3Provider(window.ethereum);
  }

  render() {
    return (
      <div>
        <Wallet />
        <EDelivery />
      </div>
    );
  }
}

export default Home;