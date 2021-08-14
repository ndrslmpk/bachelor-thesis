import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json"; // Makes the Smart Contracts ABI available  
import getWeb3 from "./getWeb3";
import './styles/output.css'

import "./App.css";
// import ImgContainer from "./components/ImgContainer";
import HeroTop from "./images/hero-bg-top.svg";
import HeroCenter from "./images/hero-bg-center.svg";
import HeroBottom from "./images/hero-bg-bottom.svg";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
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
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <div className="w-screen h-screen relative bg-black">
          {/* <ImgContainer path={HeroTop} className="border-2 w-1000 h-1000" /> */}
          <img src={HeroTop} alt="Hero's Section Top Part SVG" className="w-screen h-screen z-10 object-top" />
          <img src={HeroCenter} alt="Hero's Section Center Part SVG - Sun" className="w-screen h-screen z-0 object-center" />
          <img src={HeroBottom} alt="Hero's Section Bottom Part SVG" className="w-screen h-screen z-10 object-bottom" />
        </div>
        <h1 className="">Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p className="text-green">
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;
