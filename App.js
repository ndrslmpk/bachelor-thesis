import React from "react";
console.log(window.ethereum); //should display that an Ethereum-sopprted browser with an embedded or add-on wallet should be available like MetaMask

let web3 = new web3(Web3.givenProvider || "WS://localhost:8545");


console.log(Web3.givenProvider);