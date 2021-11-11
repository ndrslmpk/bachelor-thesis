# woly

## Starting the project

After cloning the project you have the possibility to run `npm install` to install all dependencies. For running the further environment skip to the following Truffle section.

## Used technology

In this project React, Solidity and Truffle have been used to enable a decentralized MVP for the processing of an L/C

### React

Metamask
serves as the connector between Frontend and Backend. It is the interface between our components.

web3 
is a library serving to facilitate interactions with Smart Contracts

tailwind
is used to facilitate the styling of Frontend components implementing class-based style-type selection


### Solidity
is used to develop the main building blocks of a decentralized L/C. It includes the following components:

- [X] `Lc.sol` provides
- [X] `Esrow.sol` implies logic for the main Escrow functionality that is been used to free up funds on product transfer.
- [ ] `LcFactory` shall be used to manage the issuance process of L/Cs
- [ ] `EUR-T` shall serve as medium of exchange
- [ ] `Auction` is the Logic Layer to allow external investor to profit from the participation in L/C transactions

### Truffle
facilitates the development process, due to its integration with ganache. It allows us to run a private network.

*After installation you are able to run the following commands*

`truffle compile`
`truffle develop`
`truffle migrate`
