import React, { Component } from 'react';
// import { useWeb3React } from '@web3-react/core'

// const { active, account, connector, activate, error } = useWeb3React()

/*function Web3 () {
  const web3React = useWeb3React()
  return web3React
}*/

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
      <p>Home</p>
    );
  }
}

export default Home;