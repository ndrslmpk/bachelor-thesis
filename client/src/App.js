import React, { Component } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";
// import Escrow from "../../build/contracts/Escrow.json"; // Makes the Smart Contracts ABI available
// import getWeb3 from "./getWeb3";
import "./styles/output.css";
import "./App.css";

import SmartContractManagementComponent from "./components/SmartContractManagementComponent";
import Navbar from "./components/Navbar";
import CreateContract from "./components/CreateContract";
import TransactionDashboard from "./components/TransactionDashboard";
import Footer from "./components/Footer";
import { WalletConnector } from "./components/wallet/WalletConnector";
// import Hero from "./components/Hero";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    accounts: null,
    contract: null,
  };

  componentDidMount = async () => {
    /* try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    } */
  };

  getLibrary = (provider) => {
    return new Web3(provider);
  };

  runExample = async () => {
    /* const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response }); */
  };

  render() {
    /* if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    } */
    return (
      <Web3ReactProvider getLibrary={this.getLibrary}>
        <div className='App'>
          <Navbar />
          <WalletConnector />
          <div className='flex flex-row w-full'>
            <CreateContract className='flex w-1/2' />
            <TransactionDashboard className='flex w-1/2' />
          </div>

          <div className='bg-gray-500'>
            <h1 className='flex w-full justify-center pt-10 mb-5     text-black text-xl font-mono font-bold'>
              Manage your existing contracts
            </h1>
            <p className='flex w-full text-left text-black'>
              The following section shall provide you a dashboard for your given
              Letters of Credit
            </p>
            <SmartContractManagementComponent className='flex flex-row justify-center w-full' />
          </div>
          <Footer />
        </div>
      </Web3ReactProvider>
    );
  }
}

export default App;
