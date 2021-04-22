import React from 'react';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { shortenAddress } from '../utils'
import { InjectedConnector } from '@web3-react/injected-connector';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

function useWalletModalToggle(): () => void {
  const { activate } = useWeb3React();

  return async () => { await activate(injectedConnector) }
}

function Web3StatusInner() {
  const { account, error } = useWeb3React()

  const toggleWalletModal = useWalletModalToggle()

  if (account) {
    return (
      <Button color="default" variant="success" onClick={toggleWalletModal}>
        {shortenAddress(account)}
      </Button>
    )
  } else if (error) {
    return (
      <Button color="secondary" variant="danger" onClick={toggleWalletModal}>
        {error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}
      </Button>
    )
  } else {
    return (
      <Button color="inherit" variant="primary" onClick={toggleWalletModal}>
        Connect to a wallet
      </Button>
    )
  }
}

export default function Web3Status() {
  return (
    <Form inline>
      <Web3StatusInner />
    </Form>
  )
}
