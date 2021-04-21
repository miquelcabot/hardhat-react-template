import React from 'react';
import { Button } from '@material-ui/core';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { shortenAddress } from '../utils'
import { makeStyles } from '@material-ui/core/styles';
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

function useWalletModalToggle(): () => void {
  const { activate } = useWeb3React();

  return async () => { await activate(injectedConnector) }
}

const useStyles = makeStyles((theme) => ({
  connected: {
    color: 'aqua',
  },
}));

function Web3StatusInner() {
  const classes = useStyles();

  const { account, error } = useWeb3React()

  const toggleWalletModal = useWalletModalToggle()

  if (account) {
    return (
      <Button href="#" color="default" variant="outlined" onClick={toggleWalletModal} className={classes.connected}>
        {shortenAddress(account)}
      </Button>
    )
  } else if (error) {
    return (
      <Button href="#" color="secondary" variant="outlined" onClick={toggleWalletModal}>
        {error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}
      </Button>
    )
  } else {
    return (
      <Button href="#" color="inherit" variant="outlined" onClick={toggleWalletModal}>
        Connect to a wallet
      </Button>
    )
  }
}

export default function Web3Status() {
  return (
    <>
      <Web3StatusInner />
    </>
  )
}
