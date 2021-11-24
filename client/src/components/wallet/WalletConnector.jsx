import { useWeb3React } from "@web3-react/core";
import { injected } from "../components/wallet/Connectors";

export const WalletConnector = ({ className }) => {
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
      <div className='flex flex-col items-center justify-center'>
        <button
          onClick={connect}
          className='py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-primary hover:bg-primarydarkdark'
        >
          Connect to MetaMask
        </button>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        <button
          onClick={disconnect}
          className='py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-primary hover:bg-primarydarkdark'
        >
          Disconnect
        </button>
      </div>
    </div>
  );
};
