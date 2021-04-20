import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider, 'any')
  library.pollingInterval = 15000
  return library
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
