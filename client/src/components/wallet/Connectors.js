import { InjectedConnector } from "@web3-react/injected-connector";

/* 
    1: Mainnet
    3: Ropsten test network (PoW)
    4: Rinkeby test network (PoA)
    5: Goerli test network (PoA)
    42: Kovan test network (PoA)
    1337: Local Testnet Ganache
    ! Keep in mind that Chain IDs are not Network IDs
*/
const SUPPORTED_CHAIN_IDS = [1, 3, 4, 5, 42, 1337];
/* 
  This Module detects the current injectedProvider, here MetaMask.
  In general the module is used to connect the Frontend to a wallet.
*/
export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});
