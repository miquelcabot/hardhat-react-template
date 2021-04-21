import React from 'react'
import { Button } from '@material-ui/core'
import { useWeb3React } from '@web3-react/core';

function Web3StatusInner() {
  const { account, error } = useWeb3React()

  if (account) {
    return (
      <>
        Account: {account}
      </>
    )
  } else if (error) {
    return (
      <>
        Error: {error}
      </>
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

  return (
    <>
      <Web3StatusInner />
    </>
  )
}
