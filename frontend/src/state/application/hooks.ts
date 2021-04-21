import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

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
});

export function useWalletModalToggle(): () => void {
  const { activate } = useWeb3React();

  return async () => { await activate(injectedConnector) }
}
