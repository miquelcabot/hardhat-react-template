import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK');

function getLibrary(provider: any): Web3Provider {
  // before:
  // const library = new Web3Provider(provider, 'any')
  // now, to solve the error:
  // TypeError: Cannot read property 'detectNetwork' of undefined
  // Web3Provider.detectNetwork
  // hardhat-waffle-ethers-ts-template-1/src.ts/json-rpc-provider.ts:331
  const library = new Web3Provider(provider);
  library.pollingInterval = 15000;
  return library;
}

if (!!(window as any).ethereum) {
  (window as any).ethereum.autoRefreshOnNetworkChange = false;
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <HashRouter>
          <App />
        </HashRouter>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
