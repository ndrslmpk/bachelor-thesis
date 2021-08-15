import React, { Component } from "react";
// import SimpleStorageContract from "./contracts/SimpleStorage.json"; // Makes the Smart Contracts ABI available  
// import getWeb3 from "./getWeb3";
import './styles/output.css'

import "./App.css";
// import ImgContainer from "./components/ImgContainer";
import HeroTop from "./images/hero-bg-top.svg";
import HeroCenter from "./images/hero-bg-center.svg";
import HeroBottom from "./images/hero-bg-bottom.svg";
import PenginLogo from "./images/pengin0.svg"

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

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
      <div className="App">

        <div id="navbar">

        </div>


        <div className="relative h-screen bg-black">
          {/* <ImgContainer path={HeroTop} className="border-2 w-1000 h-1000" /> */}
          <img src={HeroTop} alt="Hero's Section Top Part SVG" className="absolute w-screen h-auto z-20 top-0" />
          <img src={HeroCenter} alt="Hero's Section Center Part SVG - Sun" className="absolute w-screen h-screen z-10 top-20" />
          <img src={HeroBottom} alt="Hero's Section Bottom Part SVG" className="absolute w-screen h-auto z-20 bottom-0" />
          {/* <div className="flex z-20">
            <p className=" flex text-white z-20">Do you see the future coming?</p>
          </div> */}
        </div>

        <div className="flex flex-col bg-background p-10">
          <div>
            <div className="flex flex-row w-24 h-24 items-center justify-center rounded-full p-2">
              <img src={PenginLogo} alt="Pengin Logo" />
            </div>
            <div className="flex flex-col w-full">
              <h1 className="flex w-full text-xl text-left text-white font-mono font">Issue your Ethereum-based Letter of Credit</h1>
              <p className="flex w-full text-left text-white">Without any intermediary bank.</p>
              <p className="flex w-full text-left text-white">What are you waiting for? -> Connect your MetaMask Wallet and get started.</p>
            </div>
          </div>



          <div id="animatedBlock" className="">
            <div className="flex flex-col    border-2 border-white border-dashed     mt-10 p-10 rounded-2xl shadow-lg">
              <h1 className="flex w-full justify-center mb-5     text-white text-xl font-mono font-bold">Define your Contract's (NFT) parameters</h1>
              <form action="" method="post">
                <input type="text" name="" id="" placeholder="Your company name" className="font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50" />
                <input type="text" name="" id="" placeholder="Your company ETH address" className="font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50" />
                <input type="text" name="" id="" placeholder="Your contract subject" className="font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50" />
                <input type="number" name="" id="" placeholder="Your contract value" className="font-mono w-1/2 mx-5 my-1 border-b bg-transparent border-primary border-solid text-gray-300 focus:text-primarydarkdark focus:placeholder-primary placeholder-gray-500 placeholder-opacity-50" />
                <div className="flex flex-row items-end mt-10">
                  <div className="flex w-1/2 mx-2 justify-end">
                    <button className="w-1/3 bg-transparent bg-primarydark hover:bg-primarydark text-primarydarkdark font-semibold hover:text-white py-2 px-4 border border-primarydark hover:border-transparent rounded        transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                      Create
                    </button>
                  </div>
                  <div className="flex w-1/2 mx-2 justify-start">
                    <button className="w-1/3 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-700 hover:border-transparent rounded" disabled>
                      Reset
                    </button>
                  </div>
  
                </div>
              </form>
            </div>
          </div>
        </div>

      <div className="bg-gray-500">
        <h1 className="flex w-full justify-center pt-10 mb-5     text-black text-xl font-mono font-bold">Manage your existing contracts</h1>
        <p className="flex w-full text-left text-black">The following section shall provide you a dashboard for your given Letters of Credit</p>
        <div id="sc-dashboard">
          <p>Contract Name: String</p>
          <button className="border rounded-md p-2 hover:bg-primary"> More details</button>
          <div id="sc-details" className="flex my-5 p-5">
            <ul className="flex flex-col list-disc">
              <li className="w-full list-disc"><p> Contract Value: </p></li>
              <li className="flex w-full">Contract Name:</li>
              <li className="flex w-full">Contract Phase:</li>
              <li className="flex w-full">Contract created at:</li>
              <li className="flex w-full">Contract creator/importer: Address</li>
              <li className="flex w-full">Contract contrahent/exporter: Address</li>
            </ul>
          </div>
        </div>
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
