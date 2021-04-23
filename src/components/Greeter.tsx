import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Greeter as TcGreeter } from './../typechain/Greeter';
import { GreeterFactory as TcGreeterFactory } from './../typechain/GreeterFactory';
import { chainIdNames } from '../constants';

export const Greeter = () => {
  const { chainId, active, library } = useWeb3React();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const showGreeter = async () => {
      try {
        const chainIdName = chainIdNames[chainId as number];
        let deployedConfig = await import(`../deployments/${chainIdName}/Greeter.json`);

        let greeter: TcGreeter = TcGreeterFactory.connect(
          deployedConfig.address,
          library
        );

        setMessage(await greeter.greet());
      } catch (err) {
        setMessage(`ERROR: ${err}`)
      }
    };
    if (active) {
      showGreeter();
    }
  });

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>
        Message in the Greeter smart contract: <strong>{message}</strong>
      </div>
    </div>
  );
};

export default Greeter;
