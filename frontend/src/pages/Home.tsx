import React, { Component, useContext, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Symfoni, EDeliveryFactoryContext } from "../hardhat/SymfoniContext";

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
          Connect to MetaMask
        </button>
      )}
    </div>
  )
}

interface Props { }

const EDeliveryFactory: React.FC<Props> = () => {
  const eDeliveryFactory = useContext(EDeliveryFactoryContext);

  useEffect(() => {
    const doAsync = async () => {
        if (!eDeliveryFactory.instance) return
        console.log("EDeliveryFactory is deployed at ", eDeliveryFactory.instance.address)
        //console.log(await eDeliveryFactory.instance.greet())
    };
    doAsync();
  }, [eDeliveryFactory])

  const onClick = async () => {
    if (!eDeliveryFactory.instance) throw Error("EDeliveryFactory instance not ready")
    if (eDeliveryFactory.instance) {
        const tx = await eDeliveryFactory.instance.createDelivery([eDeliveryFactory.instance.address], "hola")
        console.log("createDelivery tx", tx)
        await tx.wait()
        console.log("New delivery created, result: ", await eDeliveryFactory.instance.deliveries)
    }
  }

  return (
    <div>
      <button type="button" onClick={onClick}>
        Connect to eDeliveryFactory with Sinfony
      </button>
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
          <EDeliveryFactory />
        </Symfoni>
      </div>
    );
  }
}

export default Home;