const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        /* 
          Optimizer is able to allocate assigned variables in a more efficient way. For example it adds up multiple uint64 to a whole uint256 block. 
        */
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
