var Escrow = artifacts.require("../contracts/Escrow.sol");
var Lc = artifacts.require("../contracts/Lc.sol");

module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    await deployer.deploy(Escrow, accounts[1], accounts[2], 10, {
      from: accounts[0],
    });
    deployer.deploy(Lc);
  });
};
