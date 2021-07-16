import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Greeter as TcGreeter } from './../typechain/Greeter';
import { Greeter__factory as TcGreeterFactory } from './../typechain/factories/Greeter__factory';
import { chainIdNames } from '../constants';

export const Greeter = () => {
  const { chainId, active, library, account } = useWeb3React();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const showGreeter = async () => {
      try {
        const chainIdName = chainIdNames[chainId as number];
        let deployedConfig = await import(`../deployments/${chainIdName}/Greeter.json`);

        const signer = library.getSigner(account);

        let greeter: TcGreeter = TcGreeterFactory.connect(
          deployedConfig.address,
          signer
        );
        
        setMessage(await greeter.greet());
      } catch (err) {
        setMessage(`ERROR: ${err.message}`)
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
