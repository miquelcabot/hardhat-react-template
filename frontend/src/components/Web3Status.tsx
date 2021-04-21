import React from 'react';
import { Button } from '@material-ui/core';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { shortenAddress } from '../utils'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  connected: {
    color: 'aqua',
  },
}));

function Web3StatusInner() {
  const classes = useStyles();

  const { account, error } = useWeb3React()

  if (account) {
    return (
      <Button href="#" color="default" variant="outlined" className={classes.connected}>
        {shortenAddress(account)}
      </Button>
    )
  } else if (error) {
    return (
      <Button href="#" color="secondary" variant="outlined">
        {error instanceof UnsupportedChainIdError ? 'Wrong Network' : 'Error'}
      </Button>
    )
  } else {
    return (
      <Button href="#" color="inherit" variant="outlined">
        Connect to a wallet
      </Button>
    )
  }
}

export default function Web3Status() {
  /*const { active } = useWeb3React()

  const contextNetwork = useWeb3React(NetworkContextName)

  if (!contextNetwork.active && !active) {
    return null
  }*/

  return (
    <>
      <Web3StatusInner />
    </>
  )
}
