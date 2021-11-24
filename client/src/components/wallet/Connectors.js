import { InjectedConnector } from "@web3-react/injected-connector";
export const injected = new InjectedConnector({
  /* 
      1: Mainnet
      3: Ropsten test network (PoW)
      4: Rinkeby test network (PoA)
      5: Goerli test network (PoA)
      42: Kovan test network (PoA)
      1337: Local Testnet Ganache
      ! Keep in mind that Chain IDs are not Network IDs
  */
  supportedChainIds: [1, 3, 4, 5, 42, 1337],
});
