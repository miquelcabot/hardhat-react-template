import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Greeter } from './../typechain/Greeter';
import { Greeter__factory } from './../typechain/factories/Greeter__factory';

export const GreeterComponent = () => {
  const { chainId, account, active, library } = useWeb3React();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const showGreeter = async () => {
      let greeter: Greeter = Greeter__factory.connect(
        '0x18AfA7D71a3af8c791F65cAeE7E513092C0628b6',
        library
      );

      setMessage(await greeter.greet());
    };
    if (active) {
      showGreeter();
    }
  });

  return (
    <div>
      <div>ChainId: {chainId}</div>
      <div>Account: {account}</div>
      {active ? (
        <div>✅ Active connection</div>
      ) : (
        <div>Not connected</div>
      )}
      <div>
        Message in the Greeter smart contract: <strong>{message}</strong>
      </div>
    </div>
  );
};

export default GreeterComponent;
