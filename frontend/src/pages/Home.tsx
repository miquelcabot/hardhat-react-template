import React, { Component, useContext, useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Symfoni, GreeterContext } from "../hardhat/SymfoniContext";

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
      <h1>Using @web3-react/core</h1>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ </div>
      ) : (
        <button type="button" onClick={onClick}>
          Connect to MetaMask
        </button>
      )}
    </div>
  )
}

interface Props { }

const Greeter: React.FC<Props> = () => {
  const greeter = useContext(GreeterContext);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const doAsync = async () => {
      if (greeter.instance) {
        console.log("Greeter is deployed at ", greeter.instance.address)
        setMessage(await greeter.instance.greet())
      }
    };
    doAsync();
  }, [greeter])

  return (
    <div>
      <h1>Using @symfoni/hardhat-react</h1>
      <p>Greeter message: <strong>{message}</strong></p>
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
        <Symfoni autoInit={true} >
          <Greeter />
        </Symfoni>
      </div>
    );
  }
}

export default Home;