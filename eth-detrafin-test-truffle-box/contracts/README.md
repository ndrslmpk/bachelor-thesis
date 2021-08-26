This folder /contracts is providing the Smart Contract's source code, that is later compiled and deployed to the local Truffle Testnetwork @localhost:8545 using

### `truffle compile`

Is the command that translates the High-Level Solidity language into the EVM-bytecode which can be executed in its EVM engine.

### `truffle develop`

Starts the local Ethereum Network while adopting configurations modified in `~\truffle-config.js`

An extensive overview on the Truffle Testnetwork configurations can be found at [I'm an inline-style link with title](https://www.trufflesuite.com/docs/truffle/reference/configuration "Truffle Docs")

### `truffle migrate --reset`

By migrations we define the way how our Smart Contracts are deployed to the Truffle Test Network. As our Contracts are changing we may want to adopt different versions of migrations to allow modifications in deployment, while maintain running Migrate-Versions. Thus, we save our "Migration-Strategy" at the `../migrations` directory.

`--reset` is a modification flag to reset all migrations that were executed previously.
