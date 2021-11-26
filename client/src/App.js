import React, { useEffect, useState } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
import Escrow from "./abis/Escrow.json"; // Makes the Smart Contracts ABI available
import TransactionDashboard from "./components/TransactionDashboard";
import Navbar from "./components/Navbar";
import CreateContract from "./components/CreateContract";
import Footer from "./components/Footer";
import { WalletConnector } from "./components/wallet/WalletConnector";

import "./styles/output.css";
import "./App.css";

const App = () => {
  const escrowAbi = Escrow.abi;
  useEffect(() => {}, []);

  const getLibrary = (provider) => {
    return new Web3(provider);
  };

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className='App'>
        <Navbar />
        <WalletConnector />
        <div className='flex flex-row w-full'>
          <CreateContract className='flex w-1/2' />
          <TransactionDashboard className='flex w-1/2' />
        </div>

        <Footer />
      </div>
    </Web3ReactProvider>
  );
};

export default App;
