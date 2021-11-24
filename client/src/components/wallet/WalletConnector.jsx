import React from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./Connectors";

export const WalletConnector = ({ className }) => {
  /*
      active: is a wallet actively connected right now?
      account: the blockchain address that is connected
      library: this is either web3 or ethers, depending what you passed in
      connector: the current connector. So, when we connect it will be the injected connector in this example
      activate: the method to connect to a wallet
      deactivate: the method to disconnect from a wallet
  */
  // eslint-disable-next-line no-unused-vars
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (exception) {
      console.log(exception);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className={`${className} `}>
      <div className='flex flex-row items-center justify-center w-full m-4'>
        <button
          onClick={connect}
          className='py-2 text-sm font-bold text-white rounded-lg w-40 bg-primary hover:bg-primarydarkdark'
        >
          Connect to MetaMask
        </button>
        <div className='p-2'>
          {active ? (
            <span>
              Connected with <b>{account}</b>
            </span>
          ) : (
            <span>Not connected</span>
          )}
        </div>
        <button
          onClick={disconnect}
          className='py-2 text-sm font-bold text-white rounded-lg w-40 bg-primary hover:bg-primarydarkdark'
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};
