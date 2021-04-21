import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { Greeter as TcGreeter } from './../typechain/Greeter';
import { Greeter__factory as TcGreeterFactory } from './../typechain/factories/Greeter__factory';

export const Greeter = () => {
  const { chainId, active, library } = useWeb3React();

  const [message, setMessage] = useState('');

  useEffect(() => {
    const showGreeter = async () => {
      try {
        let greeter: TcGreeter = TcGreeterFactory.connect(
          '0x18AfA7D71a3af8c791F65cAeE7E513092C0628b6',
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
